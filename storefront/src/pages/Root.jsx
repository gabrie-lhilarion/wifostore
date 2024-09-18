import React from 'react'
import {
    useLoaderData,
    Outlet,

} from 'react-router-dom'

import {
    Overlay,
    SideNavigation,
    Logo,
    UserAndCart,
    SearchProducts,
    Footer,

} from '../components'


function Root() {
    const data = useLoaderData()
    const {
        categories,
        products
    } = data

    const [siteData, setSiteData] = React.useState({ cart: [], categories, products })

    return (
        <>
            <Overlay />

            <div className='lg:flex justify-between h-[100vh]'>
                <aside className='hidden lg:block lg:w-[25%] bg-slate-100'>
                    <div className=' top-0 left-0 h-[100vh] bg-slate-600'>
                        <div className='flex flex-col justify-between  h-[100vh]'>
                            <div>
                                <Logo />
                                <UserAndCart cart={siteData.cart} />
                                <SearchProducts />
                                <SideNavigation productCategories={siteData.categories} />
                            </div>
                            <Footer />
                        </div>

                    </div>
                </aside>
                <main className='lg:w-[75%] h-[100vh] bg-slate-100 overflow-y-auto'>
                    <Outlet context={[siteData, setSiteData]} />
                </main>

            </div>


        </>
    )
}

export default Root