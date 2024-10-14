import React from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import { Mansonry, StickyMobileHeader } from '../components'

function Categories() {
    const [siteData, setSiteData] = useOutletContext()
    const { cart } = siteData
    const location = useLocation()
    const data = location.state

    console.log(data)

    return (
        <>
            <StickyMobileHeader cart={cart} siteData={siteData} setSiteData={setSiteData} />
            <h1 className='mt-16 text-2xl font-extrabold ml-8 lg:mt-2'>
                Categories &#187; {data.name}
            </h1>
            <Mansonry items={data.products} />
        </>
    )
}

export default Categories