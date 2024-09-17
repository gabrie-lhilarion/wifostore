import React from 'react'

function MobileShoppingCart() {
    return (
        <div className='absolute shopping-cart-wrap rounded-md bg-slate-200 z-3 w-[310px] max-h[350px] right-[10px] top-14 '>
            <div className='relative shopping-cart z-1 p-4'>
                {/* <span className='bg-white w-[20px] h-[20px] block absolute rotate-45 right-16 z-0 top-[-3px]'>
                        .
                                    </span> */}
                <p className='font-bold text-xl divide-y mb-4'>
                    My shopping cart
                </p>
                <ul className='divide-y divide-blue-200'>
                    <li className='flex p-2'>
                        <p className='w-[80px] h-[80px] bg-white'>
                            <img src="https://i.postimg.cc/q78w6CdH/banana.jpg" alt="product-image" />
                        </p>

                        <div className='uppercase font-bold p-2  relative'>
                            <span className='text-2xl absolute right-0 top-10'>&times;</span>
                            <p> Very ripe Banana </p>
                            <p>3KG</p>
                            <p> &#8358;45.00</p>
                        </div>

                    </li>
                    <li className='flex p-2'>
                        <p className='w-[80px] h-[80px] bg-white'>
                            <img src="https://i.postimg.cc/q78w6CdH/banana.jpg" alt="product-image" />
                        </p>

                        <div className='uppercase font-bold p-2  relative text-sm'>
                            <span className='text-2xl absolute right-0 top-10'>&times;</span>
                            <p> Very ripe Banana </p>
                            <p>3KG</p>
                            <p> &#8358;45.00</p>
                        </div>

                    </li>
                </ul>
                <p>

                </p>
            </div>
        </div>
    )
}

export default MobileShoppingCart