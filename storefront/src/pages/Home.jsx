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
    StickyMobileHeader
} from '../components'


import 'react-awesome-slider/dist/styles.css';


function Home() {

    const [siteData, setSiteData] = useOutletContext();
    const { cart, products } = siteData

    return (
        <div>
            <StickyMobileHeader cart={cart} siteData={siteData} setSiteData={setSiteData} />


            <section className='p-3 md:pb-20'>

                <div className='relative hidden lg:block mt-0 z-0 mb-10 ml-auto mr-auto w-[95%]'>

                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={6000}
                        className='z-0'>
                        {products.products.map(product => <div key={product.product_id}
                            className='lg:flex bg-white w-[100%] lg:h-[100%] h-[100vh]'>
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


