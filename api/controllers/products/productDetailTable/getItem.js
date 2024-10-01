// Module to retrieve a specific item from the 'product_detail' table using item_id.
// This module provides functionality to fetch a product detail by its unique item identifier.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to fetch a specific item from the 'product_detail' table using item_id.
 * 
 * @param {number} itemId - The unique identifier of the product detail.
 * 
 * @returns {Promise<Object|null>} - A promise that resolves to an object containing the product detail:
 *   - product_id: The identifier of the product (integer).
 *   - size: The size of the product (string).
 *   - price: The price of the product (numeric value).
 *   - item_id: The unique identifier of the product detail (integer).
 * 
 *   If no item is found, the function returns `null`.
 * 
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
const getItemById = async (itemId) => {
    const query = `
        SELECT product_id, size, price, item_id
        FROM product_detail
        WHERE item_id = $1;
    `;

    try {
        // Execute the query to fetch the item with the given item_id
        const result = await db.query(query, [itemId]);

        // If no item is found, return null
        if (result.rows.length === 0) {
            console.log(`No item found with item_id: ${itemId}`);
            return null;
        }

        // Return the first (and only) item found
        return result.rows[0];
    } catch (err) {
        console.error(`Error fetching item with item_id ${itemId} from product_detail table:`, err);
        throw err;
    }
};

// Export the function for use in other parts of the application
module.exports = getItemById;
