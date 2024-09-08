/**
 * @module deleteProduct
 *
 * This module defines the `deleteProduct` function used for deleting a product record from the database.
 * It removes a product from the products table based on its `product_id`.
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Deletes a product from the products table.
 * 
 * This function removes a product identified by `product_id` from the database.
 * 
 * @param {number} product_id - The ID of the product to delete.
 * @returns {Promise<void>} A promise that resolves when the product is successfully deleted.
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const deleteProduct = async (product_id) => {
    if (!product_id) {
        throw new Error('Product ID is required to delete a product.');
    }

    try {
        const result = await db.query(
            'DELETE FROM products WHERE product_id = $1;',
            [product_id]
        );

        if (result.rowCount === 0) {
            throw new Error('Product not found.');
        }

        console.log('Product deleted successfully.');
    } catch (err) {
        console.error('Error deleting product:', err);
        throw err;
    }
};

module.exports = deleteProduct;
