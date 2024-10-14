import React from 'react'


import { StepOne, StepTwo, StepThree } from '.'

function Accordion({ payment, setPayment, cart, setSiteData }) {
    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || []

    return (
        <div className='lg:w-[59%] cart-details rounded-md bg-slate-200 rounded-tl-sm rounded-tr-sm'>

            <div className='accordion divide-y divide-slate-400 rounded-tl-sm rounded-tr-sm'>
                <div className='accordion-item rounded-tl-sm rounded-tr-sm'>

                    <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                        <span
                            className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                            Step 1
                        </span>  Cart Details
                    </h1>

                    <StepOne cart={cart} setSiteData={setSiteData} />
                </div>
                <div className='accordion-item rounded-tl-sm rounded-tr-sm'>
                    <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                        <span
                            className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                            Step 2
                        </span>  Delivery Details
                    </h1>
                    <StepTwo setPayment={setPayment} cart={cart} />
                </div>

                <div className='accordion-item rounded-tl-sm rounded-tr-sm'>
                    <h1 className='accordion-header p-3 bg-slate-200 rounded-tl-sm rounded-tr-sm'>
                        <span
                            className='bg-slate-500 text-right text-slate-100 text-sm p-2 m-2 rounded-full'>
                            Step 3
                        </span>  Payment summary
                    </h1>
                    <StepThree payment={payment} />
                </div>
            </div>
        </div >
    )
}

export default Accordion