<<<<<<< HEAD
// Module to delete product details in the 'product_detail' table in a PostgreSQL database
// This module provides functionality to delete a product detail using the 'item_id'.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to delete an item from the 'product_detail' table.
 * 
 * @param {number} item_id - The unique identifier of the product detail to be deleted.
 * 
 * @returns {Promise<void>} - A promise that resolves when the item is deleted.
 * @throws {Error} - Throws an error if the delete operation fails.
 */
const deleteItem = async (item_id) => {
    try {
        // Execute the SQL query to delete the item with the given item_id
        const result = await db.query('DELETE FROM product_detail WHERE item_id = $1 RETURNING *', [item_id]);

        if (result.rowCount === 0) {
            console.log(`No item found with item_id ${item_id}.`);
        } else {
            console.log(`Item with item_id ${item_id} deleted successfully.`);
            return { delete: 'success', item: item_id }
        }
    } catch (err) {
        console.error('Error deleting the item:', err);
        throw err;
    }
};

// Export the function for use in other parts of the application
module.exports = deleteItem;
=======
// Module to delete product details in the 'product_detail' table in a PostgreSQL database
// This module provides functionality to delete a product detail using the 'item_id'.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to delete an item from the 'product_detail' table.
 * 
 * @param {number} item_id - The unique identifier of the product detail to be deleted.
 * 
 * @returns {Promise<void>} - A promise that resolves when the item is deleted.
 * @throws {Error} - Throws an error if the delete operation fails.
 */
const deleteItem = async (item_id) => {
    try {
        // Execute the SQL query to delete the item with the given item_id
        const result = await db.query('DELETE FROM product_detail WHERE item_id = $1 RETURNING *', [item_id]);

        if (result.rowCount === 0) {
            console.log(`No item found with item_id ${item_id}.`);
        } else {
            console.log(`Item with item_id ${item_id} deleted successfully.`);
        }
    } catch (err) {
        console.error('Error deleting the item:', err);
        throw err;
    }
};

// Export the function for use in other parts of the application
module.exports = deleteItem;
>>>>>>> ab3ec94ed277df8fe2d002be8685cd435aa30604
