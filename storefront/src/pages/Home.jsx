import React from 'react'

import Slider from "react-slick";

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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const showOverLay = () => {
    document.getElementById('overlay').classList.remove('hidden')
}

const toggleShoppingCart = () => {
    const shoppingCcarts = document.querySelectorAll('.shopping-cart')
    shoppingCcarts.forEach(cart => cart.classList.toggle('hidden'))
}

const SimpleSlider = ({ categories }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {categories && categories.map(
                category => <div className='flex mb-4 text-slate-100' key={category.replace(/\s+/g, '-')}>

                    <h1 className='text-black'>

                        {category}
                    </h1>



                </div>
            )}
        </Slider>
    );
}

function Home() {

    const [siteData, setSiteData] = useOutletContext();

    const { cart, products, categories } = siteData
    const list = Object.keys(categories)

    const totalItemsInCart = () => cart.reduce((current, previous) => previous.quantity + current, 0)

    const toggleMobileMenu = () => document.getElementById('mobile-menu').classList.toggle('hidden')

    return (
        <div>
            <section className='top-of-main h-[50px] bg-slate-400 lg:w-[75%] lg:hidden w-[100%] fixed'>
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
                <div className='mb-6'>
                    <SimpleSlider categories={list} />
                </div>
                <Mansonry items={products.products} />
            </section>
        </div>
    )
}

export default Home


