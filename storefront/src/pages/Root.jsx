import React from 'react'
import {
    useLoaderData
} from 'react-router-dom'

import {
    Overlay,
    SideNavigation,
    Logo,
    UserAndCart,
    SearchProducts,
    Footer,
    Mansonry,
    MobileShoppingCart
} from '../components'

import { SlGrid } from "react-icons/sl";


function Root() {
    const data = useLoaderData()
    const {
        categories,
        products
    } = data


    console.log({ categories, products })

    const showOverLay = () => {
        document.getElementById('overlay').classList.remove('hidden')
    }

    const toggleShoppingCart = () => {
        const shoppingCcarts = document.querySelectorAll('.shopping-cart')
        shoppingCcarts.forEach(cart => cart.classList.toggle('hidden'))
    }


    return (
        <>
            <Overlay />

            <div className='lg:flex justify-between h-[100vh]'>
                <aside className='hidden lg:block lg:w-[25%] bg-slate-100'>
                    <div className=' top-0 left-0 h-[100vh] bg-slate-600'>
                        <div className='flex flex-col justify-between  h-[100vh]'>
                            <div>
                                <Logo />
                                <UserAndCart />
                                <SearchProducts />
                                <SideNavigation productCategories={categories} />
                            </div>
                            <Footer />
                        </div>

                    </div>
                </aside>

                <main className='lg:w-[75%] h-[100vh] bg-slate-100 overflow-y-auto'>
                    <section className='top-of-main h-[50px] bg-slate-400 lg:w-[75%] lg:hidden w-[100%] fixed'>
                        <div className='flex justify-between'>
                            <p className='p-3'>
                                <SlGrid className='w-[40px] text-2xl' />
                            </p>
                            <ul className='flex mr-6'>
                                <li onClick={showOverLay} className='p-3 bg-slate-200 rounded-full mr-3 mt-[0.5px]'>
                                    Guest
                                </li>
                                <li onClick={toggleShoppingCart} className='p-3  bg-slate-200 rounded-full mt-[0.5px]'>
                                    Cart
                                </li>
                            </ul>
                            <MobileShoppingCart />
                        </div>
                    </section>

                    <section className='p-3 md:pb-20'>
                        <Mansonry items={products.products} />
                    </section>
                </main>
            </div>


        </>
    )
}

export default Root