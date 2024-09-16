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
    Mansonry
} from '../components'




function Root() {
    const data = useLoaderData()
    const {
        categories,
        products
    } = data

    console.log({ categories, products })

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

                <main className='lg:w-[75%] h-[100vh] bg-slate-100 overflow-y-auto '>

                    <section className='p-3'>
                        <Mansonry items={products.products} />
                    </section>
                </main>
            </div>


        </>
    )
}

export default Root