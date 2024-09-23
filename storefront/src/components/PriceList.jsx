import { useOutletContext } from 'react-router-dom';


import {
    alreadyInCart,
    hidePriceList,
    addToCart,
    minusQuantity,
    plusQuantity,
    getQuantity
} from '../utils/cart'

const PriceList = ({ list }) => {
    const [siteData, setSiteData] = useOutletContext()
    const { cart, products, items } = siteData


    const QuantityControl = ({ itemId, cart, setSiteData }) => {
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


    return <ul className='m-2'>
        <p
            onClick={(e) => hidePriceList(e.target)}

            className='hide-list bg-slate-600 text-slate-300 text-center cursor-pointer pb-2 pt-2 rounded-tl-full rounded-tr-full hover:bg-black'>
            &#8593; hide list
        </p>

        {list.length == 0 && <p className='text-center bg-slate-300 p-4'> NO PRICE LIST AVAILABLE YET</p>}

        {list.length > 0 && list.map(item => <li
            className='flex justify-between mb-1 p-1 bg-slate-200'
            key={item.size}>
            <p className='flex justify-between bg-slate-200 w-[40%] '>

                <span className=' text-sm font-bold text-slate-600 p-2'>
                    {item.size}
                </span>
                <span className=' text-sm font-bold text-slate-600 p-2'>
                    &#8358;{item.price}
                </span>
            </p>

            {alreadyInCart(item.item_id, cart) ?
                <QuantityControl itemId={item.item_id} cart={cart} siteData={siteData} setSiteData={setSiteData} /> :
                <button
                    onClick={() => addToCart(item.item_id, items, cart, products, setSiteData)}
                    className='bg-slate-400 p-2 rounded-full'
                    type="button"
                    data-item={item.item_id}
                >
                    Add to cart
                </button>}


        </li>)}
    </ul>

}

export default PriceList