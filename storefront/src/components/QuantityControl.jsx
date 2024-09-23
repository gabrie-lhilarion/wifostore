import React from 'react'
import {
    minusQuantity,
    getQuantity,
    plusQuantity

} from '../utils/cart'


function QuantityControl({ itemId, cart, setSiteData }) {
    return (
        <div className='p-2'>
            <span onClick={() => minusQuantity(itemId, cart, setSiteData)}
                className='w-[35px] inline-block bg-slate-600 text-center text-slate-100 cursor-pointer leading-0'> &minus; </span>
            <span>
                <input className='w-[30px] text-center'
                    type="text"
                    defaultValue={getQuantity(itemId, cart)} />
            </span>
            <span onClick={() => plusQuantity(itemId, cart, setSiteData)}
                className='w-[35px] inline-block bg-slate-600 text-center text-slate-100 cursor-pointer leading-0'> &#x2B; </span>

        </div>
    )
}

export default QuantityControl