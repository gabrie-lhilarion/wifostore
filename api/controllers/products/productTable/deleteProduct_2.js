/**
 * @module deleteProduct
 *
 * This module defines the `deleteProduct` function used for deleting a product record from the database.
 * It also handles the deletion of associated product details if cascading deletes are not set up.
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Deletes a product and its associated product details from the database.
 * 
 * This function removes a product identified by `product_id` from the `products` table.
 * If cascading deletes are not set up, it also manually deletes associated product details.
 * 
 * @param {number} product_id - The ID of the product to delete.
 * @returns {Promise<void>} A promise that resolves when the product and its details are successfully deleted.
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const deleteProduct = async (product_id) => {
    if (!product_id) {
        throw new Error('Product ID is required to delete a product.');
    }

    try {
        // Optionally delete associated product details if cascading deletes are not set up
        await db.query('DELETE FROM product_detail WHERE product_id = $1;', [product_id]);

        // Delete the product from the products table
        const result = await db.query('DELETE FROM products WHERE product_id = $1;', [product_id]);

        if (result.rowCount === 0) {
            throw new Error('Product not found.');
        }

        console.log('Product and associated details deleted successfully.');

        return { delete: 'success' }
    } catch (err) {
        console.error('Error deleting product:', err);
        throw err;
    }
};

module.exports = deleteProduct;
