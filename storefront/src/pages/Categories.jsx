import React from 'react'
import { useLocation, useOutletContext, Link } from 'react-router-dom'
import { Mansonry, StickyMobileHeader } from '../components'

function Categories() {
    const [siteData, setSiteData] = useOutletContext()
    const { cart } = siteData
    const location = useLocation()
    const data = location.state

    console.log(data)

    return (
        <div className='p-2'>
            <StickyMobileHeader cart={cart} siteData={siteData} setSiteData={setSiteData} />
            <div className='flex justify-between'>

                <h1 className='mt-16 text-2xl font-extrabold ml-8 lg:mt-2'>
                    Categories &#187; {data.name}
                </h1>
                <Link to='/' className='mr-10 text-2xl font-extrabold text-slate-700 p-2'>
                    | All Products &#187;
                </Link>
            </div>
            <Mansonry items={data.products} />
        </div>
    )
}

export default Categories