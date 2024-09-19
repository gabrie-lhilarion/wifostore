import { useOutletContext } from 'react-router-dom';

const hidePriceList = (target) => {
    const card = target.parentElement.parentElement.parentElement
    card.querySelector('button').classList.toggle("hidden")
    card.querySelector('.price-list').classList.toggle('hidden')

}

const PriceList = ({ list }) => {
    const [siteData, setSiteData] = useOutletContext()
    const { cart, products, items } = siteData

    const alreadyInCart = (item_id) => {
        return cart.find(item => Number(item.item_id) === Number(item_id))
    }

    const addToCart = (itemId) => {
        const item = items.find(item => Number(item.item_id) === Number(itemId))
        const product = products.products.find(product => Number(product.product_id) === Number(item.product_id))
        const updatedItem = { ...item, quantity: 1, product_image_url: product.product_image_url, product_name: product.product_name }

        const updatedCart = cart.concat(updatedItem)
        localStorage.setItem('wifostore_cart', JSON.stringify(updatedCart))

        setSiteData((siteData) => ({ ...siteData, cart: updatedCart }))
    }

    const getQuantity = (itemId, cart) => {

        const item = cart.find(item => Number(item.item_id) === Number(itemId))
        return item.quantity
    }

    const minusQuantity = (itemId, cart) => {
        const item = cart.find(item => Number(item.item_id) === Number(itemId))

        if (item.quantity > 1) {
            item.quantity--

            localStorage.setItem('wifostore_cart', JSON.stringify(cart))

            setSiteData((siteData) => ({ ...siteData, cart: cart }))
        } else {
            const id = item.item_id
            const cartAfterDelete = cart.filter(item => Number(item.item_id) !== Number(id))

            localStorage.setItem('wifostore_cart', JSON.stringify(cartAfterDelete))

            setSiteData((siteData) => ({ ...siteData, cart: cartAfterDelete }))
        }
    }
    const plusQuantity = (itemId, cart) => {
        const item = cart.find(item => Number(item.item_id) === Number(itemId))
        item.quantity++

        localStorage.setItem('wifostore_cart', JSON.stringify(cart))

        setSiteData((siteData) => ({ ...siteData, cart: cart }))
    }

    const QuantityControl = ({ itemId }) => <p className='p-2'>
        <span onClick={() => minusQuantity(itemId, cart)} className='w-[35px] inline-block bg-slate-600 text-center text-slate-100 cursor-pointer leading-0'> &minus; </span>
        <span>
            <input className='w-[30px] text-center'
                type="text"
                defaultValue={getQuantity(itemId, cart)} />
        </span>
        <span onClick={() => plusQuantity(itemId, cart)} className='w-[35px] inline-block bg-slate-600 text-center text-slate-100 cursor-pointer leading-0'> &#x2B; </span>
    </p>

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

            {alreadyInCart(item.item_id) ?
                <QuantityControl itemId={item.item_id} /> :
                <button
                    onClick={() => addToCart(item.item_id)}
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