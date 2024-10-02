import React from 'react'

import {
    minusQuantity,
    getQuantity,
    plusQuantity,
    deleteFromCart
} from '../utils/cart'


import {
    goToDelivery
} from '../utils/checkout'

function StepOne({ cart, setSiteData }) {
    return (
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
    )
}

export default StepOne