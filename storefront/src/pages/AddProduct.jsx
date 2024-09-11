import React, { useState } from 'react';
import { useLoaderData, useActionData, Form, redirect } from 'react-router-dom';

// This function will load data (product list) for the component
export async function loader() {
    const response = await fetch('/api/products');
    const products = await response.json();
    return products; // Return the product list as loader data
}

// This function will handle form submission
export async function action({ request }) {
    const formData = await request.formData();
    const newProduct = {
        productName: formData.get('productName'),
        productCategory: formData.get('productCategory'),
        productDetail: formData.get('productDetail'),
        skuNumber: formData.get('skuNumber'),
        productImageUrl: formData.get('productImageUrl'),
    };

    const response = await fetch('/api/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
    });

    if (response.ok) {
        return redirect('/admin/products'); // Redirect after success
    } else {
        const error = await response.json();
        return error;
    }
}

function AddProduct() {
    const products = useLoaderData(); // Load product list on component mount
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
        <div style={{ display: 'flex' }}>
            {/* Form to add new product (on the left) */}
            <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ddd' }}>
                <h2>Add Product</h2>
                {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
                <Form method="post">
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
                        <input
                            type="text"
                            name="productCategory"
                            value={formState.productCategory}
                            onChange={handleInputChange}
                            required
                        />
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
                    <button type="submit">Add Product</button>
                </Form>
            </div>

            {/* Product List (on the right) */}
            <div style={{ flex: 1, padding: '20px' }}>
                <h2>Product List</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.product_id}>
                            {product.product_name} - {product.product_category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddProduct;
