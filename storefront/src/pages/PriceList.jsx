import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'

function PriceList() {
    // const priceList = useLoaderData();
    let { state } = useLocation();

    const createInputsSizePrize = () => { }

    return (
        <div className='w-[60%] m-auto bg-white p-4'>
            <h2 className='text-lg font-bold'>
                {state.product.product_name}
            </h2>
            <p>
                View and Edit PriceList
            </p>

            <table className='w-full'>
                {state.product.details.length > 0 && state.product.details.map
                    ((item, index) => <tr className={index % 2 === 0 ? 'p-3 bg-slate-200' : 'p-3 bg-slate-300'}>
                        <td>
                            {item.size}
                        </td>
                        <td>
                            {item.price}
                        </td>
                        <td>

                        </td>
                    </tr>
                    )}

            </table>

            <button
                onClick={createInputsSizePrize}
                className='p-3 bg-slate-500 text-slate-200 mt-6'
                type="button">
                Add item
            </button>

        </div>
    )
}

export default PriceList