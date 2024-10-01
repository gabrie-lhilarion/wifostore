import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { StickyMobileHeader } from '../components'
import {
    minusQuantity,
    getQuantity,
    plusQuantity,
    deleteFromCart
} from '../utils/cart'

import {
    goToDelivery,
    showOverLay,
    goToPaymemtIntruction,
    hideSelect,
    showSelect,
    selectDeliveryTime
} from '../utils/checkout'

function Checkout() {

    const [siteData, setSiteData] = useOutletContext()
    const [payment, setPayment] = useState({})
    const { cart } = siteData
    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || []
    console.log(currentUser)


    return (<>
        <StickyMobileHeader cart={cart} siteData={siteData} setSiteData={setSiteData} />
        <section className='lg:mt-6 mt-24'>
            <div className='flex justify-between m-6'>
                <p className='p-4'>
                    SHOP &#187; CHECKOUT
                </p>
                <Link to='/' className='mr-10 bg-slate-500 text-slate-100 p-4'>
                    Continue shopping &#187;
                </Link>
            </div>
            <div className='lg:flex justify-between lg:w-[85%] m-auto mb-[100px]'>
                <div className='lg:w-[59%] cart-details rounded-md bg-slate-200 rounded-tl-sm rounded-tr-sm'>



                    <div className='accordion divide-y divide-slate-400 rounded-tl-sm rounded-tr-sm'>
                        <div className='accordion-item rounded-tl-sm rounded-tr-sm'>
                            <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                                <span
                                    className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                                    Step 1
                                </span>  Cart Details
                            </h1>
                            <article id='step-1' className='accordion-content bg-slate-100 divide-y divide-slate-300'>
                                {cart.length === 0 && <div className='grid place-items-center h-[150px]'>
                                    <p>
                                        The shopping cart is empty!
                                    </p>
                                </div>
                                }

                                {cart.length > 0 && cart.map((item) => <div key={item.item_id} className='flex justify-between pt-2'>
                                    <div className='flex'>
                                        <p className='w-[100px] p-2 m-2'>
                                            {< img src={item.product_image_url} alt="" />}

                                        </p>

                                        <p className='text-2xl'>
                                            <strong> {item.product_name} </strong> <br />
                                            {item.size} <br />
                                            &#8358;{item.price}
                                        </p>
                                    </div>

                                    <div className='grid place-items-center'>
                                        <div className='text-center text-slate-500'>
                                            <span className='text-sm'> Quantity </span>
                                            <p className='bg-slate-200'>
                                                <span
                                                    onClick={() => minusQuantity(item.item_id, cart, setSiteData)}
                                                    className='hover:bg-slate-600 cursor-pointer hover:text-slate-200 p-1 w-[60px] h=[60px]'>&minus;</span>
                                                <input className='w-[30px] h-[30px] text-center' type="text" value={getQuantity(item.item_id, cart)} />
                                                <span
                                                    onClick={() => plusQuantity(item.item_id, cart, setSiteData)}
                                                    className='hover:bg-slate-600 cursor-pointer hover:text-slate-200 p-1 w-[60px] h=[60px]'> &#x2B;
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className='font-extrabold grid place-items-center p-4'>
                                        <span className='w-[30px] h-[30px] hover:bg-slate-500 text-lg text-center cursor-pointer leading-0 hover:text-slate-100 rounded-full'
                                            onClick={() => deleteFromCart(item.item_id, cart, setSiteData)}>
                                            &times;
                                        </span>
                                    </p>

                                </div>)

                                }

                                {
                                    cart.length > 0 && <p className='pr-10 flex justify-end'>
                                        <span onClick={goToDelivery} className='bg-slate-500 text-right text-slate-100 text-sm cursor-pointer rounded-sm p-2 m-2'>
                                            Continue to Delivery
                                        </span>
                                    </p>
                                }

                            </article>
                        </div>
                        <div className='accordion-item rounded-tl-sm rounded-tr-sm'>
                            <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                                <span
                                    className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                                    Step 2
                                </span>  Delivery Details
                            </h1>
                            <div id='step-2' className='accordion-content hidden bg-slate-100 p-4'>


                                {Object.keys(currentUser).length === 0 ? <ul className='flex tabs relative h-[48px]'>
                                    <li className='p-2  m-2 mb-0 bordered bg-slate-100 absolute bottom-[-2px]'>Guest</li>
                                    <li className='p-2  m-2 mb-0 bordered absolute left-[70px]'>Customer</li>
                                </ul> :
                                    <ul className='flex tabs relative h-[48px]'>
                                        <li className='p-2  m-2 mb-2 bordered bg-slate-100 absolute'>Guest</li>
                                        <li className='p-2  m-2 mb-0 bordered bg-slate-50  absolute left-[70px]  bottom-[-1.5px]'>Customer</li>
                                    </ul>}


                                <div className='tabs-content  border-t-2 border-slate-400'>
                                    {Object.keys(currentUser).length === 0 ? <div id='guest' className='h-[200px] grid place-items-center'>
                                        <p className='bg-white p-3 leading-5'>
                                            <button onClick={showOverLay} className='p-2 m-3 inline-block bg-slate-600 rounded-sm text-slate-100'
                                                type="button">
                                                Login or create account
                                            </button> <br />
                                            We are sorry that you cannot complete your purchase as a guest.
                                            Our engineers are working to implement this feature as soon as possible.<br />
                                            Thank you!

                                        </p>
                                    </div> : <div id='customer' className='min-h-[200px]  grid place-items-center'>
                                        <div className='bg-white p-6 leading-5'>
                                            <p className='bg-red-100 p-3'>
                                                To be delivered you <strong> {currentUser.first_name}  {currentUser.last_name}.  <br /> </strong>
                                                We will use your address on our records.
                                            </p>


                                            <ul onClick={(e) => selectDeliveryTime(e.target, setPayment)} className='list-decimal divide-y divide-slate-400'>
                                                <li
                                                    className='flex  justify-between p-2'>
                                                    <span>Delivery Time</span>
                                                    <span > Delivery fee </span>
                                                </li>
                                                <li
                                                    onMouseLeave={(e) => hideSelect(e.target)}
                                                    onMouseEnter={(e) => showSelect(e.target)}
                                                    className='flex delivery_list justify-between p-2'>
                                                    <span className='delivery_time'> Within 24 hrs </span>
                                                    <span>
                                                        &#8358;<em className='amount'>5,500</em>
                                                        <em className='checkable inline-block ml-2 text-center w-[40px] text-sm font-extrabold p-1 rounded-sm bg-slate-300 text-white'> &#10003; </em>

                                                    </span>
                                                </li>
                                                <li
                                                    onMouseLeave={(e) => hideSelect(e.target)}
                                                    onMouseEnter={(e) => showSelect(e.target)}
                                                    className='flex delivery_list justify-between p-2'>
                                                    <span className='delivery_time'> Within 2 days </span>
                                                    <span>
                                                        &#8358;<em className='amount'>2,500</em>
                                                        <em className='checkable inline-block ml-2 text-center w-[40px] text-sm font-extrabold p-1 rounded-sm bg-slate-300 text-white'> &#10003; </em>
                                                    </span>
                                                </li>
                                                <li
                                                    onMouseLeave={(e) => hideSelect(e.target)}
                                                    onMouseEnter={(e) => showSelect(e.target)}
                                                    className='flex delivery_list justify-between p-2'>
                                                    <span className='delivery_time'>  Within 1 week </span>
                                                    <span>
                                                        &#8358;<em className='amount'>1,500</em>
                                                        <em className='checkable inline-block ml-2 text-center w-[40px] text-sm font-extrabold p-1 rounded-sm bg-slate-300 text-white'> &#10003; </em>
                                                    </span>
                                                </li>
                                                <li
                                                    onMouseLeave={(e) => hideSelect(e.target)}
                                                    onMouseEnter={(e) => showSelect(e.target)} className='flex delivery_list justify-between p-2'>
                                                    <span className='delivery_time'>  Within 1 month </span>
                                                    <span>
                                                        &#8358;<em className='amount'>500</em>
                                                        <em className='checkable inline-block ml-2 text-center w-[40px] text-sm font-extrabold p-1 rounded-sm bg-slate-300 text-white'> &#10003; </em>
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className='p-4 flex justify-between'>
                                                <button className='p-3 bg-slate-600 text-slate-100' type="button">Give new address</button>
                                                <button onClick={goToPaymemtIntruction} className='p-3 ml-20 bg-red-100 text-slate-800' type="button">Continue to payment instruction</button>
                                            </p>

                                        </div>
                                    </div>}



                                </div>
                            </div>
                        </div>
                        <div className='accordion-item rounded-tl-sm rounded-tr-sm'>
                            <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                                <span
                                    className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                                    Step 3
                                </span>  Payment instructions
                            </h1>
                            <div id='step-3' className='accordion-content hidden bg-slate-100 p-4'>

                                <div id='guest' className='min-h-[150px] grid place-items-center'>
                                    <div className='bg-white p-3 leading-5'>
                                        <h2 className='text-2xl text-center p-3'>Be mindfull of the following instruction</h2>
                                        <ul className='text-sm list-decimal p-4'>
                                            <li>
                                                Make sure the card is your card, we will check if the card holders name is your name
                                            </li>
                                            <li>
                                                During the payment proccess please don't close the window
                                            </li>
                                            <li>
                                                Your payment will be proccessed instantly
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div >

                <div className='lg:w-[39%]'>


                    <h1 className='text-2xl text-center bg-slate-400 rounded-tr-md rounded-tl-md'>
                        Make Payment
                    </h1>
                    {Object.keys(payment).length === 0 ? <div className='bg-red-100 payment-proccessor grid place-items-center h-[200px]'><p
                        className=' rounded-md p-4 font-extrabold'>
                        ...Waiting for payment details</p></div> :
                        <div className=' payment-proccessor p-3 '>
                            <table className='w-full divide-y divide-slate-400'>
                                <thead>
                                    <tr className='font-bold'>
                                        <td>Item </td>
                                        <td>Qauntity </td>
                                        <td>Price </td>
                                        <td>Item ttl </td>
                                    </tr>
                                </thead>
                                {payment.cart.map(item => <tr className='p-2'>
                                    <td className='p-2'>  {item.size} {item.product_name} </td>
                                    <td className='p-2'>  {item.quantity} </td>
                                    <td className='p-2'>  {item.price} </td>
                                    <td className='p-2'> &#8358;{+item.quantity * +item.price} </td>
                                </tr>
                                )}
                                <tr>
                                    <td className='text-right font-bold bg-green-100 p-2' colspan={4}>
                                        <span style={{ float: 'left' }}> Sub total </span>
                                        <span></span> &#8358; {payment.cart.reduce((previous, current) => (+current.quantity * +current.price) + previous, 0)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-right font-bold bg-green-100 p-2' colspan={4}>
                                        <span style={{ float: 'left' }}> Delivery </span>
                                        &#8358;{Number(payment.deliveryFee).toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-right font-bold bg-green-100 p-2' colspan={4}>
                                        <span style={{ float: 'left' }}> Grand Total </span>
                                        &#8358;{+payment.deliveryFee + (payment.cart.reduce((previous, current) => (+current.quantity * +current.price) + previous, 0))}
                                    </td>
                                </tr>
                            </table>

                        </div>
                    }

                </div>

            </div >
        </section >
    </>)
}

export default Checkout
