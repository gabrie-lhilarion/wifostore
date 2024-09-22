import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Checkout() {
    const [siteData] = useOutletContext()
    const { cart } = siteData
    console.log(cart)
    return (
        <div className='lg:flex justify-between lg:w-[85%] m-auto'>
            <div className='w-[59%] cart-details rounded-md p-4'>
                {cart.length === 0 && <div>EMPTY CART</div>}
                {cart.length > 0 && cart.map(item => <div className='flex'>
                    <p className='w-[100px] p-2'>
                        {<img src={item.product_image_url} alt="" />}

                    </p>

                    <p className='text-2xl'>
                        {item.product_name} <br />
                        {item.size} <br />
                        {item.price}
                    </p>

                </div>)}
            </div>

            <div className='w-[39%] payment-proccessor rounded-md p-4'>
                payment proccessor here
            </div>
        </div>
    )
}

export default Checkout
