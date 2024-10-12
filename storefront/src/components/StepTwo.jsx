import React from 'react';
import {
    showOverLay,
    goToPaymemtIntruction,
    selectDeliveryTime
} from '../utils/checkout';

import { DeliveryOption } from '.'


function StepTwo({ setPayment, cart }) {
    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || {};
    const isGuest = Object.keys(currentUser).length === 0;

    const useNewAddreess = () => {
        const form = document.getElementById("new-add-form")
        const newDetails = {
            funllName: form.full_name.value,
            phoneNumber: form.phone_number.value,
            fullAddress: form.full_address.value
        }

        console.log(newDetails)
    }

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
                                To be delivered to <strong>{currentUser.first_name} {currentUser.last_name}</strong>.<br />
                                We will use your address on our records.
                                <div className=' mt-2'>

                                    <button
                                        className='p-2 m-auto mt-3 text-slate-100 block rounded-full bg-slate-500'>
                                        No, deliver to another address
                                    </button>

                                    <form id="new-add-form" className='w-full mt-3  divide-y divide-slate-400'>
                                        <p>
                                            <input className="w-full p-2" type="text" name="full_name" placeholder="Enter fullname" />
                                        </p>
                                        <p>

                                            <input className="w-full p-2" type="text" name="phone_number" placeholder="Enter phone number" />

                                        </p>
                                        <p>


                                            <textarea className="w-full p-2" name="full_address" placeholder='Please enter full address'></textarea>

                                            <button
                                                onClick={useNewAddreess}
                                                className='p-3 bg-slate-500 mt-3 rounded-full text-slate-100'
                                                type="button">
                                                DONE
                                            </button>
                                        </p>
                                    </form>

                                </div>
                            </div>

                            <div className='p-2 text-right bg-slate-100'>
                                <ul className='list-decimal divide-y divide-slate-400'>
                                    <h1 className='text-xl font-bold'>
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


                            <p className='p-4 '>

                                <button onClick={goToPaymemtIntruction} className='p-3 ml-20 bg-red-100 text-slate-800'>
                                    Continue to payment instruction
                                </button>
                            </p>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StepTwo;
