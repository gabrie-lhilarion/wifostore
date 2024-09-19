import React from 'react'
import { User } from "."
import { FaShoppingCart } from "react-icons/fa";



function UserAndCart({ cart, setSiteData }) {

    const toggleShoppingCart = () => {
        const shoppingCarts = document.querySelectorAll('.shopping-cart')
        shoppingCarts.forEach(cart => cart.classList.toggle('hidden'))
    }

    const totalItemsInCart = () => cart.reduce((current, previous) => +previous.quantity + current, 0)

    const deleteFromCart = (id) => {

        const cartAfterDelete = cart.filter(item => Number(item.item_id) !== Number(id))

        localStorage.setItem('wifostore_cart', JSON.stringify(cartAfterDelete))

        setSiteData((siteData) => ({ ...siteData, cart: cartAfterDelete }))
    }


    const cartTotal = () => cart.reduce((previous, current) => (+current.quantity * +current.price) + previous, 0)

    return (
        <section className='relative'>
            <div className='flex mr-4 justify-end'>
                <User />
                <p onClick={toggleShoppingCart} className='flex bg-slate-200 cursor-pointer m-2 p-2 relative w-[40px]'>
                    <span className='absolute top-[-15px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                        {totalItemsInCart()}
                    </span>
                    <FaShoppingCart />
                </p>
            </div>
            <div className='absolute shopping-cart-wrap shopping-cart hidden rounded-md bg-white z-3 w-[310px] max-h[350px] left-[100px] rotate-[45]'>
                <section className='relative z-5'>

                    <p className='font-bold text-center text-xl p-3 divide-y'>
                        My shopping cart
                    </p>
                    <ul className='divide-y divide-blue-200 p-4 z-6'>
                        {cart.length === 0 && <li className='text-center'>EMPTY CART</li>}
                        {cart.length > 0 && cart.map(item => (<li key={item.item_id} className='flex p-2'>
                            <p className='w-[60px] h-[60px] bg-white'>
                                <img src={item.product_image_url} alt="product-image" />
                            </p>

                            <div className='font-bold p-2 font-normal relative'>
                                <span onClick={() => deleteFromCart(item.item_id)}
                                    className='text-lg absolute right-[-30px] top-10'>&times;
                                </span>
                                <p className='font-extrabold'> {item.product_name} </p>
                                <p> {item.size} </p>
                                <p> Unit Price: &#8358;{item.price} </p>
                                <p> Qty: {item.quantity} <span className='p-1 bg-slate-200 rounded-md'>
                                    Item ttl: &#8358;{(+item.price * +item.quantity).toFixed(2)} </span>
                                </p>
                            </div>
                        </li>))}

                        {cart.length > 0 && <p className='pt-2'> Cart Total:  &#8358;{(cartTotal()).toFixed(2)} </p>}

                    </ul>

                    {cart.length > 0 && <p className='flex justify-between border-2 p-2 border-t-slate-200'>
                        <button className='p-2 bg-slate-500 text-slate-100'> edit cart </button>
                        <button className='p-2 bg-slate-500 text-slate-100'> Checkout </button>
                    </p>}
                </section>
            </div>

        </section>
    )
}

export default UserAndCart