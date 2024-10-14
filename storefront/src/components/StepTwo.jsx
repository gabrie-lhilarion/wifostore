import React from 'react';
import {
    showOverLay,
    goToPaymemtIntruction,
    selectDeliveryTime
} from '../utils/checkout';

import { DeliveryOption, NewAddressForm } from '.'

function StepTwo({ setPayment, cart }) {
    const [showForm, setShowForm] = React.useState(false)
    const [showDeiveryTime, setShowDeiveryTime] = React.useState(false)

    const revealForm = () => setShowForm(true)
    const revealDeliveryTime = () => {

        setShowDeiveryTime(true)
        localStorage.setItem('delivery_details', JSON.stringify([]))
    }

    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || {};
    const isGuest = Object.keys(currentUser).length === 0;

    const deliveryOptions = [
        { time: 'Within 24 hrs', fee: '5500' },
        { time: 'Within 2 days', fee: '2500' },
        { time: 'Within 1 week', fee: '1500' },
        { time: 'Within 1 month', fee: '500' }
    ];

    return (
        <div id='step-2' className='accordion-content hidden bg-slate-100 p-4'>
            <ul className='flex tabs relative h-[48px]'>
                <li className={`p-2 m-2 mb-0 bordered bg-slate-${isGuest ? '100' : '50'} absolute`}>Guest</li>
                <li className={`p-2 m-2 mb-0 bordered absolute left-[70px] bg-slate-${isGuest ? '100' : '50'} bottom-[-1.5px]`}>Customer</li>
            </ul>

            <div className='tabs-content border-t-2 border-slate-400'>
                {isGuest ? (
                    <div id='guest' className='h-[200px] grid place-items-center'>
                        <p className='bg-white p-3 leading-5'>
                            <button onClick={showOverLay} className='p-2 m-3 inline-block bg-slate-600 rounded-sm text-slate-100'>
                                Login or create account
                            </button>
                            <br />
                            We are sorry that you cannot complete your purchase as a guest.
                            Our engineers are working to implement this feature as soon as possible.
                            Thank you!
                        </p>
                    </div>
                ) : (
                    <div id='customer' className='min-h-[200px]'>
                        <div className='bg-white p-6 leading-5'>
                            <div className='bg-slate-200 p-3 text-center'>
                                {
                                    !showForm &&
                                    <p>

                                        To be delivered to <strong>{currentUser.first_name} {currentUser.last_name}</strong>.<br />
                                        We will use your address on our records.
                                    </p>
                                }
                                <div className=' mt-2'>
                                    {!showDeiveryTime && <p className='flex'>
                                        {!showForm && <button
                                            onClick={revealDeliveryTime}
                                            className='p-2 m-auto mt-3 text-slate-100 block rounded-full bg-slate-500'
                                            type="button">
                                            Yes to  <strong>{currentUser.first_name} {currentUser.last_name}</strong>
                                        </button>}

                                        {!showForm && <button
                                            onClick={revealForm}
                                            className='p-2 m-auto mt-3 text-slate-100 block rounded-full bg-slate-500'>
                                            No, deliver to another address
                                        </button>}
                                    </p>
                                    }

                                    {showForm && <NewAddressForm setShowDeiveryTime={setShowDeiveryTime} />}
                                </div>
                            </div>

                            {showDeiveryTime &&
                                <div className='p-2 text-right bg-slate-100'>
                                    <ul className='list-decimal divide-y divide-slate-400'>
                                        <h1 className='text-xl font-bold pt-4 pr-3'>
                                            Choose delivery time
                                        </h1>
                                        {deliveryOptions.map(option => (
                                            <DeliveryOption
                                                key={option.time}
                                                time={option.time}
                                                fee={option.fee}
                                                onSelect={selectDeliveryTime}
                                                setPayment={setPayment}
                                                cart={cart}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            }

                            {/* <p className='p-4 '>

                                <button onClick={goToPaymemtIntruction} className='p-3 ml-20 bg-red-100 text-slate-800'>
                                    Continue to payment instruction
                                </button>
                            </p> */}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StepTwo;
