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
        const response = await fetch('http://your-server-url.com/api/add-product-detail', {
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
