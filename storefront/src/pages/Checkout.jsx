import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { StickyMobileHeader, Accordion } from '../components'


function Checkout() {

    const [siteData, setSiteData] = useOutletContext()
    const [payment, setPayment] = useState({})
    const { cart } = siteData



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

                <Accordion setPayment={setPayment} cart={cart} setSiteData={setSiteData} />


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
                                    <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
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
