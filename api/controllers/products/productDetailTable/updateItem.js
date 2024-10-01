// Module to update a single product detail in the 'product_detail' table in a PostgreSQL database
// This module provides functionality to update one product detail using the 'item_id'.
// The function can update either the size or price of the product detail.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to update a single item in the 'product_detail' table.
 * 
 * @param {Object} item - The item to be updated. Should contain:
 *   - item_id: The unique identifier of the product detail to be updated (integer).
 *   - size: The new size of the product (optional, string with a max length of 50).
 *   - price: The new price of the product (optional, numeric value).
 * 
 * @returns {Promise<Object>} - A promise that resolves when the item is updated with the updated details.
 * @throws {Error} - Throws an error if the update operation fails or if no fields are provided.
 */
const updateItem = async (item) => {
    const { item_id, size, price } = item;

    // Ensure at least one field (size or price) is provided for the update
    if (!size && !price) {
        throw new Error('No fields to update. Please provide either size or price.');
    }

    try {
        // Construct the dynamic query based on provided fields (size, price)
        let updateQuery = 'UPDATE product_detail SET ';
        const updateParams = [];
        let paramIndex = 1;

        if (size) {
            updateQuery += `size = $${paramIndex++}, `;
            updateParams.push(size);
        }

        if (price) {
            updateQuery += `price = $${paramIndex++}, `;
            updateParams.push(price);
        }

        // Remove trailing comma and space, then add WHERE clause
        updateQuery = updateQuery.slice(0, -2) + ` WHERE item_id = $${paramIndex}`;
        updateParams.push(item_id);

        // Execute the query to update the item
        const result = await db.query(updateQuery, updateParams);

        // Check if any rows were affected, meaning the item was successfully updated
        if (result.rowCount === 0) {
            throw new Error('Item not found or no changes made.');
        }

        console.log('Item updated successfully.');

        // Return the updated item details
        return { item_id, size, price };
    } catch (err) {
        console.error('Error updating item:', err);
        throw err;
    }
};


/**
 * sample JSON body
 * 
 * {
  "item_id": 2,
  "size": "Large",
  "price": 49.99
}
 */

// Export the function for use in other parts of the application
module.exports = updateItem;
