import React from 'react'
import {
    Overlay,
    SideNavigation,
    Logo,
    UserAndCart,
    SearchProducts,
    Footer
} from '../components'

import Styles from "../css_rules/css.json"

function Root() {
    return (
        <>
            <Overlay />

            <div className='container flex h-[100vh]'>
                <aside className='w-[25%] bg-slate-100'>
                    <div className='fixed top-0 left-0 h-[100vh] bg-slate-100 w-[25%]'>
                        <div className='flex flex-col justify-between  h-[100vh]'>
                            <div>
                                <Logo />
                                <UserAndCart />
                                <SearchProducts />
                                <SideNavigation />
                            </div>
                            <Footer />
                        </div>

                    </div>
                </aside>

                <main className='w-[75%] verflow-y-auto	'>

                    <section className='p-4'>
                        main content area
                    </section>
                </main>
            </div>
        </>
    )
}

export default Root