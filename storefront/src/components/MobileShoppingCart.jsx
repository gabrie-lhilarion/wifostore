import React from 'react'




function MobileShoppingCart({ cart, siteData, setSiteData }) {

    const deleteFromCart = (id) => {

        const cartAfterDelete = cart.filter(item => Number(item.item_id) !== Number(id))

        localStorage.setItem('wifostore_cart', JSON.stringify(cartAfterDelete))

        setSiteData((siteData) => ({ ...siteData, cart: cartAfterDelete }))
    }


    return (
        <div className='absolute shopping-cart-wrap shopping-cart hidden rounded-md bg-slate-200 z-3 w-[310px] max-h[350px] right-[10px] top-14 '>
            <div className='relative  z-1'>

                <p className='font-bold text-xl text-center p-3 divide-y'>
                    My shopping cart
                </p>
                <ul className='divide-y divide-blue-200 p-4'>

                    {cart.length === 0 && <li className='text-center'>EMPTY CART</li>}
                    {cart.length > 0 && cart.map(item => (<li key={item.item_id} className='flex p-2'>
                        <p className='w-[60px] h-[60px] bg-white'>
                            <img src={item.product_image_url} alt="product-image" />
                        </p>

                        <div className='font-bold p-2 font-normal relative'>
                            <span onClick={() => deleteFromCart(item.item_id)}
                                className='text-lg absolute right-[-30px] top-10'>&times;
                            </span>
                            <p> {item.product_name} </p>
                            <p> {item.size} </p>
                            <p> Unit Price: &#8358;{item.price} </p>
                            <p> Qty: {item.quantity} <span className='p-1 bg-slate-200 rounded-md'>
                                Item ttl: &#8358;{(+item.price * +item.quantity).toFixed(2)} </span>
                            </p>
                        </div>
                    </li>))}
                </ul>
                {cart.length > 0 && <p className='flex justify-between border-2 p-2 border-t-slate-200'>
                    <button className='p-2 bg-slate-500 text-slate-100'> edit cart </button>
                    <button className='p-2 bg-slate-500 text-slate-100'> Checkout </button>
                </p>}

            </div>
        </div>
    )
}

export default MobileShoppingCart