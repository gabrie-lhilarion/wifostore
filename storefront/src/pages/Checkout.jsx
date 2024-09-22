import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function Checkout() {
    const [siteData] = useOutletContext()
    const { cart } = siteData
    console.log(cart)
    return (<section className='mt-6'>
        <div className='flex justify-between m-6'>
            <p className='p-4'>
                SHOP &#187; CHECKOUT
            </p>
            <Link to='/' className='mr-10 bg-slate-500 text-slate-100 p-4'>
                Continue shopping &#187;
            </Link>
        </div>
        <div className='lg:flex justify-between lg:w-[85%] m-auto'>
            <div className='w-[59%] cart-details rounded-md p-4 bg-slate-200 divide-y divide-slate-400'>
                <p className='text-left p-4 text-lg font-extrabold'>
                    MY CART DETAILS
                </p>
                {cart.length === 0 && <div>EMPTY CART</div>}
                {cart.length > 0 && cart.map(item => <div key={item.product_id} className='flex justify-between pt-2'>
                    <p className='w-[100px] p-2 m-2'>
                        {< img src={item.product_image_url} alt="" />}

                    </p>

                    <p className='text-2xl'>
                        <strong> {item.product_name} </strong> <br />
                        {item.size} <br />
                        &#8358;{item.price}
                    </p>

                    <p className='fgrid place-items-center'>
                        <span>&minus;</span>
                        <input className='w-[30px] h-[30px] justify-end' type="text" defaultValue={0} />
                        <span> &#x2B; </span>
                    </p>

                    <p className='text-2xl font-extrabold'>
                        &times;
                    </p>

                </div>)
                }
            </div >

            <div className='w-[39%]'>
                <p className='lg:bg-red-100 payment-proccessor rounded-md p-4 bg-slate-300'>

                    Mike Payment
                </p>
            </div>

        </div >
    </section >
    )
}

export default Checkout
