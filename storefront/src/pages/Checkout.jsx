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

                <Accordion payment={payment} setPayment={setPayment} cart={cart} setSiteData={setSiteData} />


                <div className='lg:w-[39%]'>


                    <h1 className='text-2xl text-center bg-slate-300 rounded-tr-md rounded-tl-md p-3'>
                        Make Payment
                    </h1>
                    {Object.keys(payment).length === 0 ? <div className='bg-red-100 payment-proccessor grid place-items-center h-[200px]'>
                        <p
                            className=' rounded-md p-4 font-extrabold'>
                            ...Waiting for payment details</p>
                    </div> :
                        <div className=' payment-proccessor p-3 text-center'>
                            ...comming soon <br />
                            PAY WITH PAYSTACK
                        </div>
                    }

                </div>

            </div >
        </section >
    </>)
}

export default Checkout
