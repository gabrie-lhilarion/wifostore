import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { StickyMobileHeader } from '../components'
import {
    minusQuantity,
    getQuantity,
    plusQuantity,
    deleteFromCart
} from '../utils/cart'

function Checkout() {
    const [siteData, setSiteData] = useOutletContext()
    const { cart } = siteData

    const goToDelivery = () => {
        document.getElementById('step-1').classList.add('hidden')
        document.getElementById('step-2').classList.remove('hidden')
    }

    const showOverLay = () => {
        document.getElementById('overlay').classList.remove('hidden')
    }


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
                            <p id='step-2' className='accordion-content hidden bg-slate-100 p-4'>
                                <ul className='flex tabs relative h-[48px]'>
                                    <li className='p-2  m-2 mb-0 bordered bg-slate-100 absolute bottom-[-2px]'>Guest</li>
                                    <li className='p-2  m-2 mb-0 bordered absolute left-[70px]'>Customer</li>
                                </ul>
                                <div className='tabs-content  border-t-2 border-slate-400'>
                                    <div id='guest' className='h-[200px] grid place-items-center'>
                                        <p className='bg-white p-3 leading-5'>
                                            <button onClick={showOverLay} className='p-2 m-3 inline-block bg-slate-600 rounded-sm text-slate-100'
                                                type="button">
                                                Login or create account
                                            </button> <br />
                                            We are sorry that you cannot complete your purchase as a guest.
                                            Our engineers are working to implement this feature as soon as possible.<br />
                                            Thank you!

                                        </p>

                                    </div>
                                    <div id='guest' className='hidden '>
                                        Customer Content
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className='accordion-item rounded-tl-sm rounded-tr-sm'>
                            <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                                <span
                                    className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                                    Step 3
                                </span>  Payment instructions
                            </h1>
                            <div id='step-3' className='accordion-content hidden bg-slate-100 p-4'>
                                <ul className='flex tabs relative h-[48px]'>
                                    <li className='p-2  m-2 mb-0 bordered bg-slate-100 absolute bottom-[-1px]'>Guest</li>
                                    <li className='p-2  m-2 mb-0 bordered absolute left-[70px]'>Customer</li>
                                </ul>
                                <div className='tabs-content border-t-2 border-slate-400'>
                                    <div id='guest' className='h-[150px] grid place-items-center'>
                                        <div className='bg-white p-3 leading-5'>
                                            <h2 className='text-center text-lg font-bold'>Login or Create an account</h2>
                                            We are sorry that you cannot complete your purchase as a guest.
                                            Our engineers are working to implement this feature as soon as possible.<br />
                                            Thank you!
                                        </div>
                                    </div>
                                    <div id='guest' className='hidden '>
                                        Customer Content
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className='lg:w-[39%]'>
                    <p className='lg:bg-red-100 payment-proccessor rounded-md p-4 bg-slate-300'>

                        Make Payment
                    </p>
                </div>

            </div >
        </section >
    </>)
}

export default Checkout
