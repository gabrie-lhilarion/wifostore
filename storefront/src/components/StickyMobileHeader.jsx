import React from 'react'
import {

    MobileShoppingCart,
    SideNavigation,
    Footer
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



const toggleMobileMenu = () => document.getElementById('mobile-menu').classList.toggle('hidden')

function StickyMobileHeader({ cart, siteData, setSiteData }) {

    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || []

    const showInitials = (user) => `${user.first_name[0]} ${user.last_name[0]}`

    const totalItemsInCart = () => cart.reduce((current, previous) => previous.quantity + current, 0)

    return (
        <section style={{ zIndex: '20000' }} className='top-of-main h-[50px] bg-slate-400 lg:w-[75%] lg:hidden w-[100%] fixed'>
            <div className='flex justify-between'>
                <div className='relative'>
                    <p className='flex'>
                        <SlGrid onClick={toggleMobileMenu} className='cursor-pointer m-3 w-[40px] text-2xl' />
                        <span className='pt-3 font-bold uppercase'>
                            Wifostore
                        </span>
                    </p>
                    <div id='mobile-menu' className='flex hidden flex-col justify-between bg-slate-500 w-[100vw] h-[95vh] left-0'>
                        <div>
                            <h1 className='text-right p-3 font-bold '>WIFOSTORE</h1>

                            <SideNavigation productCategories={siteData.categories} products={siteData.products} />

                        </div>

                        <Footer />

                    </div>
                </div>
                <ul className='flex mr-6'>
                    {Object.keys(currentUser).length === 0 ?
                        <li onClick={showOverLay} className=' flex p-3'>Guest </li> :
                        <li className=' flex p-3 bg-white mt-[1.25px]'> {showInitials(currentUser)} </li>}

                    <li onClick={toggleShoppingCart} className='p-3  rounded-full mt-[0.5px] cursor-pointer relative'>
                        <span className='absolute top-[-1px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                            {totalItemsInCart()}
                        </span>

                        <span className='mt-1 text-xl block'>

                            <FaShoppingCart />
                        </span>

                    </li>
                </ul>
                <MobileShoppingCart cart={cart} siteData={siteData} setSiteData={setSiteData} />
            </div>
        </section>
    )
}

export default StickyMobileHeader