import React from 'react'

function StepThree({ payment }) {
    return (
        <div id='step-3' className='accordion-content hidden bg-slate-100 p-4'>

            {Object.keys(payment).length === 0 ? <div className=' grid place-items-center h-[200px]'><p
                className=' rounded-md p-4 font-extrabold'>
                ...Waiting for payment details</p></div> :
                <div className=' p-3 '>
                    <table className='w-full  divide-y divide-slate-400'>
                        <thead className=' divide-y divide-slate-400'>
                            <tr className='font-bold'>
                                <td>Item </td>
                                <td>Price </td>
                                <td>Qtt. </td>
                                <td className='pr-3 text-right'>Item ttl </td>
                            </tr>
                        </thead>
                        <tbody className=' divide-y divide-slate-400'>
                            {console.log(payment.cart)}
                            {payment.cart.map((item, index) => <tr key={item.item_id} className='p-2'>
                                <td className='p-2'>
                                    <em className='w-[20px] h-[20px] inline-block bg-slate-500 text-slate-50 text-center mr-2'>
                                        {index + 1}.
                                    </em>
                                    {item.size} {item.product_name}
                                </td>
                                <td className='p-2'>  {item.price} </td>
                                <td className='p-2'>  {item.quantity} </td>
                                <td className='p-2 text-right'> &#8358;{+item.quantity * +item.price} </td>
                            </tr>
                            )}
                            <tr>
                                <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
                                    <span style={{ float: 'left' }}> Sub total </span>
                                    <span></span> &#8358; {payment.cart.reduce((previous, current) => (+current.quantity * +current.price) + previous, 0)}
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
                                    <span style={{ float: 'left' }}> Delivery </span>
                                    &#8358;{Number(payment.deliveryFee).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
                                    <span style={{ float: 'left' }}> Grand Total </span>
                                    &#8358;{+payment.deliveryFee + (payment.cart.reduce((previous, current) => (+current.quantity * +current.price) + previous, 0))}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            }

        </div>
    )
}

export default StepThree