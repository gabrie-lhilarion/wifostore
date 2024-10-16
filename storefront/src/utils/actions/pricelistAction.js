<<<<<<< HEAD
import { json } from 'express';
import db from '../../database/postgress';  // Assuming your database connection is set up like this

export const pricelistAction = async ({ request }) => {
    try {
        const formData = await request.formData();

        // Convert FormData to a structured object
        const newItems = [];
        formData.forEach((value, key) => {
            const [_, index, field] = key.match(/newItems\[(\d+)\]\[(\w+)\]/) || [];
            if (index !== undefined) {
                if (!newItems[index]) {
                    newItems[index] = {};
                }
                newItems[index][field] = value;
            }
        });

        // Insert each new item into the 'product_detail' table
        for (const item of newItems) {
            await db.query(
                'INSERT INTO product_detail (size, price) VALUES ($1, $2)',
                [item.size, item.price]
            );
        }

        return json({ success: true, message: 'Items added successfully' });
    } catch (error) {
        console.error('Error submitting pricelist:', error);
        return json({ success: false, message: 'Error adding items' });
    }
};

export default pricelistAction;
=======
/**
 * @module pricelistAction
 *
 * This module defines the action function that handles submitting the product details (size, price)
 * from the frontend to the backend API that stores the data in the product_detail table.
 */

export const priceListAction = async ({ request }) => {
    try {
        // Extract form data submitted via the PriceList form
        const formData = await request.formData();

        // Convert form data to an array of product details (size and price)
        const productDetails = [];
        const productId = formData.get('productId'); // Assuming the productId is included in the form

        // Get the new size and price inputs from the formData (assuming they are submitted as arrays)
        const sizes = formData.getAll('size');
        const prices = formData.getAll('price');

        // Construct the productDetails array
        sizes.forEach((size, index) => {
            productDetails.push({
                productId: productId,  // Add the productId to each detail
                size: size,
                price: prices[index]
            });
        });

        // Make the POST request to the backend with the product details
        const response = await fetch('https://wifostore.onrender.com/add-product-detail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productDetails)
        });

        // Handle response
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        // Return the result (number of records inserted, etc.)
        return result;

    } catch (error) {
        console.error('Error submitting product details:', error);
        throw error;
    }
};

export default priceListAction;
>>>>>>> gabriel_shopping_experience
