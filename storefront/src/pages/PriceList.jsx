import React from 'react'
import { useLoaderData } from 'react-router-dom'

function PriceList() {
    const priceList = useLoaderData();
    console.log(priceList)
    return (
        <div>PriceList</div>
    )
}

export default PriceList