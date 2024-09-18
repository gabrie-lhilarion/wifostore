import React, { useState } from 'react';
import { useLoaderData, useActionData, useFetcher, Link, } from 'react-router-dom';


function AddProduct() {
    const { products } = useLoaderData(); // Load product list on component mount
    const fetcher = useFetcher()
    console.log(products)
    const actionData = useActionData(); // Handle form submission response
    const [formState, setFormState] = useState({
        productName: '',
        productCategory: '',
        productDetail: '',
        skuNumber: '',
        productImageUrl: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className='flex bg-slate-200 product-crud'>
            {/* Form to add new product (on the left) */}
            <div className='flex-1 p-3'>
                <h2 className='text-center font-bold text-2xl'>Add Product</h2>
                {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
                <fetcher.Form method="post" id='add-product-form' className='divide-1 divide-x-slate-400'>
                    <div>
                        <label>Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={formState.productName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Product Category</label>
                        <select name="productCategory" id="">
                            <option value="">--choose--</option>
                            <option value="Friuts">Friuts</option>
                            <option value="Fats and Oil">Fats and Oil</option>
                            <option value="Herbes">Herbes</option>
                            <option value="Condiments">Condiments</option>
                            <option value="Meats">Meats</option>
                            <option value="Fish">Fish</option>
                            <option value="Cooked">Cooked</option>
                            <option value="Barbecue">Babecue</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Vegetable">Vegetable</option>
                        </select>

                    </div>
                    <div>
                        <label>Product Detail</label>
                        <textarea
                            name="productDetail"
                            value={formState.productDetail}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>SKU Number</label>
                        <input
                            type="text"
                            name="skuNumber"
                            value={formState.skuNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Product Image URL</label>
                        <input
                            type="text"
                            name="productImageUrl"
                            value={formState.productImageUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                    {fetcher.state === 'idle' ?
                        <button className='bg-slate-500 p-3 rounded-lg text-bold text-slate-100' type="submit">Add Product</button>
                        :
                        <button className='bg-slate-500 p-3 rounded-lg text-bold text-slate-100' type="button">.. please wait</button>
                    }
                </fetcher.Form>
            </div>

            {/* Product List (on the right) */}
            <div className='flex-1 p-2 bg-white'>
                <h2 className='font-bold text-center'>Product List</h2>
                <ul>
                    {products.map((product, index) => (
                        <li key={product.product_id}
                            className={index % 2 === 0 ? 'bg-slate-100 p-1 flex justify-between' : 'p-1 flex justify-between'}>
                            <p>
                                {index + 1}. {product.product_name}
                            </p>
                            <p className='text-sm '>
                                <Link to={`/admin/price-list/${product.product_id}`} state={{ product }} >
                                    Price list  <em className='bg-slate-600 inline-block p-1 w-[25px] text-slate-100'> {product.details.length}  </em>
                                </Link >
                                <span className='w-[30px] h-[30px] text-lg inline-block text-center text-red-600 hover:bg-red-600 hover:text-white cursor-pointer rounded-full'>
                                    &times;
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddProduct;
