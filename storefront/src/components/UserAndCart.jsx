import React from 'react'
import { User } from "."
import { FaShoppingCart } from "react-icons/fa";


function UserAndCart({ cart }) {

    const toggleShoppingCart = () => {
        const shoppingCarts = document.querySelectorAll('.shopping-cart')
        shoppingCarts.forEach(cart => cart.classList.toggle('hidden'))
    }


    return (
        <section className='relative'>
            <div className='flex mr-4 justify-end'>
                <User />
                <p onClick={toggleShoppingCart} className='flex bg-slate-200 cursor-pointer m-2 p-2 relative w-[40px]'>
                    <span className='absolute top-[-15px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                        {cart.length}
                    </span>
                    <FaShoppingCart />
                </p>
            </div>
            <div className='absolute shopping-cart-wrap shopping-cart hidden rounded-md bg-white z-3 w-[310px] max-h[350px] left-[100px] rotate-[45]'>
                <section className='relative z-1 p-4'>
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
                                <img src="https://i.postimg.cc/C5Ks2Pnw/beef.jpg" alt="product-image" />
                            </p>

                            <div className='uppercase font-bold p-2  relative text-sm'>
                                <span className='text-2xl absolute right-0 top-10'>&times;</span>
                                <p> Fresh Beaf </p>
                                <p>3KG</p>
                                <p> &#8358;45.00</p>
                            </div>

                        </li>
                    </ul>
                    <p>

                    </p>
                </section>
            </div>

        </section>
    )
}

export default UserAndCart