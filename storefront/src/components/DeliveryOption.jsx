import React from 'react'

function DeliveryOption({ time, fee, onSelect, setPayment, cart }) {

    const [mouseEnter, setMouseEnter] = React.useState(false)


    const hideSelect = () => {
        setMouseEnter(false)
    }

    const showSelect = () => {
        setMouseEnter(true)
    }


    return (
        <li
            onClick={() => onSelect(fee, time, setPayment, cart)}
            onMouseLeave={(e) => hideSelect(e.target)}
            onMouseEnter={(e) => showSelect(e.target)}
            className={`flex  delivery_list justify-between p-2 ${mouseEnter ? 'selected' : null}`}>
            <span className={`delivery_time ${mouseEnter ? 'font-bold' : ''}`}>{time}</span>
            <span>
                &#8358;<em className={` ${mouseEnter ? 'amount font-bold' : 'amount'}`}>{fee}</em>
                <em
                    className={`checkable ${mouseEnter ? 'bg-green-700' : 'bg-slate-200'} inline-block ml-2 text-center w-[40px] text-sm font-extrabold p-1 rounded-sm text-white`}>
                    &#10003;
                </em>
            </span>
        </li>
    )
}

export default DeliveryOption 
