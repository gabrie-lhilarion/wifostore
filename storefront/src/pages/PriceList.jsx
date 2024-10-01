import React, { useState } from 'react';
import { useLocation, useFetcher } from 'react-router-dom';

function PriceList() {
    let { state } = useLocation();
    const fetcher = useFetcher();

    // State to hold the new items (size and price inputs)
    const [newItems, setNewItems] = useState([]);

    // Function to add new inputs for size and price
    const createInputsSizePrice = () => {
        document.getElementById("submit-pricelist").classList.toggle('hidden');
        setNewItems([...newItems, { size: '', price: '' }]);
    };

    // Handle change for input fields
    const handleInputChange = (index, field, value) => {
        const updatedItems = [...newItems];
        updatedItems[index][field] = value;
        setNewItems(updatedItems);
    };

    return (
        <fetcher.Form method="post" action="/submit-pricelist">
            <div className='w-[60%] m-auto bg-white p-4'>
                <h2 className='text-lg font-bold'>
                    {state.product.product_name}
                </h2>
                <p>View and Edit Price List</p>

                <table className='w-full'>
                    <tbody>
                        {state.product.details.length > 0 && state.product.details.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'p-3 bg-slate-200' : 'p-3 bg-slate-300'}>
                                <td>{item.size}</td>
                                <td>{item.price}</td>
                                <td></td>
                            </tr>
                        ))}

                        {/* New items (input fields) */}
                        {newItems.map((item, index) => (
                            <tr key={index + state.product.details.length} className='p-3 bg-slate-100'>
                                <td>
                                    <input
                                        type="text"
                                        name={`newItems[${index}][size]`}
                                        value={item.size}
                                        placeholder="Size"
                                        onChange={(e) => handleInputChange(index, 'size', e.target.value)}
                                        className="border p-2"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name={`newItems[${index}][price]`}
                                        value={item.price}
                                        placeholder="Price"
                                        onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                        className="border p-2"
                                    />
                                </td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='flex justify-between'>
                    <button
                        onClick={createInputsSizePrice}
                        className='p-3 bg-slate-500 text-slate-200 mt-6'
                        type="button"
                    >
                        Add item
                    </button>

                    <button
                        id='submit-pricelist'
                        className='p-3 bg-green-500 hidden text-slate-50 mt-6'
                        type="submit"
                    >
                        Submit Items
                    </button>
                </div>
            </div>
        </fetcher.Form>
    );
}

export default PriceList;
