import React from 'react'


import {
    showOverLay,
    goToPaymemtIntruction,
    hideSelect,
    showSelect,
    selectDeliveryTime
} from '../utils/checkout'


function StepTwo({ setPayment }) {
    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || []
    return (
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
                            <button onClick={goToPaymemtIntruction}
                                className='p-3 ml-20 bg-red-100 text-slate-800' type="button">Continue to payment instruction</button>
                        </p>

                    </div>
                </div>}



            </div>
        </div>
    )
}

export default StepTwo