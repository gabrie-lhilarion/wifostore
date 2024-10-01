// Module to retrieve all items from the 'product_detail' table in a PostgreSQL database
// This module provides functionality to fetch all product details with their respective fields.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to fetch all items from the 'product_detail' table.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of items, each containing:
 *   - product_id: The identifier of the product (integer).
 *   - size: The size of the product (string).
 *   - price: The price of the product (numeric value).
 *   - item_id: The unique identifier of the product detail (integer).
 * 
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
const getItemsList = async () => {
    const query = `
        SELECT product_id, size, price, item_id
        FROM product_detail;
    `;

    try {
        // Execute the query to fetch all items from the product_detail table
        const result = await db.query(query);

        // If no items are found,
        // return an empty array

        if (result.rows.length === 0) {
            console.log('No items found.');
            return [];
        }

        // Return the array of items fetched from the database
        return result.rows;
    } catch (err) {
        console.error('Error fetching items from product_detail table:', err);
        throw err;
    }
};

// Export the function for use in other parts of the application
module.exports = getItemsList;
