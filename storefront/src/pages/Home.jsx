import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

import {
    useOutletContext
} from 'react-router-dom';

import {
    Mansonry,
    MobileShoppingCart,
    SideNavigation,
    Footer
} from '../components'

import { SlGrid } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import 'react-awesome-slider/dist/styles.css';


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



    const totalItemsInCart = () => cart.reduce((current, previous) => previous.quantity + current, 0)

    const toggleMobileMenu = () => document.getElementById('mobile-menu').classList.toggle('hidden')

    return (
        <div>
            <section style={{ zIndex: '20000' }} className='top-of-main h-[50px] bg-slate-400 lg:w-[75%] lg:hidden w-[100%] fixed'>
                <div className='flex justify-between'>
                    <div className='relative'>
                        <p className='flex'>
                            <SlGrid onClick={toggleMobileMenu} className='cursor-pointer m-3 w-[40px] text-2xl' />
                            <span className='pt-3 font-bold uppercase'>
                                Wifostore
                            </span>
                        </p>
                        <div id='mobile-menu' className='flex flex-col justify-between bg-slate-500 w-[100vw] h-[95vh] left-0'>
                            <div>
                                <h1 className='text-right p-3 font-bold '>WIFOSTORE</h1>

                                <SideNavigation productCategories={siteData.categories} />

                            </div>

                            <Footer />

                        </div>
                    </div>
                    <ul className='flex mr-6'>
                        <li onClick={showOverLay} className=' flex p-3'>
                            Guest
                        </li>
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


            <section className='p-3 md:pb-20'>

                <div className='relative hidden lg:block mt-0 z-0 mb-10 ml-auto mr-auto w-[95%]'>

                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={6000}
                        className='z-0'>
                        {products.products.map(product => <div className='lg:flex bg-white w-[100%] lg:h-[100%] h-[100vh]'>
                            <div>
                                <img src={product.product_image_url} alt="product_image" />
                            </div>
                            <div className=' p-4 w-[50%] grid place-items-center justify-items-center'>
                                <h1 className='text-3xl font-extrabold text-center'>
                                    {product.product_name}
                                </h1>
                                <p className='text-3xl'>
                                    {product.product_detail}
                                </p>
                                <p>
                                    <button className='bg-slate-500 text-slate-100 p-4 uppercase' type="button">
                                        Buy now
                                    </button>
                                </p>
                            </div>
                        </div>)}
                    </AutoplaySlider>

                </div>


                <Mansonry items={products.products} />
            </section>

        </div>
    )
}

export default Home


