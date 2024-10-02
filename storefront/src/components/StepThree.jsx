import React from 'react'

function StepThree() {
    return (
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
    )
}

export default StepThree