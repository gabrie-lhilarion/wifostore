import React from 'react'
import {
    useOutletContext
} from 'react-router-dom';

import {
    Mansonry,
    MobileShoppingCart
} from '../components'

import { SlGrid } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";

const showOverLay = () => {
    document.getElementById('overlay').classList.remove('hidden')
}

const toggleShoppingCart = () => {
    const shoppingCcarts = document.querySelectorAll('.shopping-cart')
    shoppingCcarts.forEach(cart => cart.classList.toggle('hidden'))
}


function Home() {

    const [siteData, setSiteData] = useOutletContext();

    const { cart, products } = siteData
    console.log(siteData)
    return (
        <div>
            <section className='top-of-main h-[50px] bg-slate-400 lg:w-[75%] lg:hidden w-[100%] fixed'>
                <div className='flex justify-between'>
                    <p className='p-3'>
                        <SlGrid className='w-[40px] text-2xl' />
                    </p>
                    <ul className='flex mr-6'>
                        <li onClick={showOverLay} className=' flex p-3'>
                            Guest
                        </li>
                        <li onClick={toggleShoppingCart} className='p-3  rounded-full mt-[0.5px] cursor-pointer relative'>
                            <span className='absolute top-[-1px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                                {cart.length}
                            </span>

                            <span className='mt-1 text-xl block'>

                                <FaShoppingCart />
                            </span>

                        </li>
                    </ul>
                    <MobileShoppingCart />
                </div>
            </section>

            <section className='p-3 md:pb-20'>
                <Mansonry items={products.products} />
            </section>
        </div>
    )
}

export default Home