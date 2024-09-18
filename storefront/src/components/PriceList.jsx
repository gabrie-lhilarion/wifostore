import { useOutletContext } from 'react-router-dom';

const hidePriceList = (target) => {
    const card = target.parentElement.parentElement.parentElement
    console.log(card)
    card.querySelector('button').classList.toggle("hidden")
    card.querySelector('.price-list').classList.toggle('hidden')

}

const PriceList = ({ list }) => {
    const [siteData, setSiteData] = useOutletContext()
    const { cart } = siteData

    const alreadyInCart = (item_id) => {
        console.log({ cart, item_id })
        return cart.find(item => Number(item.item_id) === Number(item_id))
    }

    const addToCart = (target) => {
        console.log(target.dataset.price)
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
            <p className='flex justify-between bg-slate-200 w-[60%] '>

                <span className=' text-sm font-bold text-slate-600 p-2'>
                    {item.size}
                </span>
                <span className=' text-sm font-bold text-slate-600 p-2'>
                    &#8358;{item.price}
                </span>
            </p>

            {alreadyInCart(item.item_id) ? <p>In cart</p> :
                <button
                    onClick={(e) => addToCart(e.target)}
                    className='bg-slate-400 p-2 rounded-full'
                    type="button"
                    data-size={item.size}
                    data-price={item.price}
                    data-product={item.product_id}
                    data-item={item.item_id}
                >
                    Add to cart
                </button>}


        </li>)}
    </ul>

}

export default PriceList