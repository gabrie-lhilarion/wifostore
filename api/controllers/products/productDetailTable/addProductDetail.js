/**
 * @module addProductDetail
 *
 * This module defines the `addProductDetail` function, which adds one or more product detail records to the database.
 * It allows for adding multiple product details from a single POST request.
 */

const db = require('../database/postgress'); // Import the database module

const createProductDetailTable = require('./createProductDetailTable')
createProductDetailTable()

/**
 * Adds one or more product detail records to the `product_detail` table.
 * 
 * @param {number} productId - The ID of the product to which the details belong.
 * @param {Array<Object>} productDetails - An array of product detail objects. Each object contains `size` and `price` properties.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the number of records inserted.
 * @throws {Error} Throws an error if there is a problem with the database insertion.
 */
const addProductDetail = async (productId, productDetails) => {
    if (!Array.isArray(productDetails) || productDetails.length === 0) {
        throw new Error('Product details should be a non-empty array.');
    }

    try {
        // Construct the SQL query to insert multiple rows
        const values = productDetails.map((detail) => `('${productId}', '${detail.size}', '${detail.price}')`).join(',');

        const query = `
            INSERT INTO product_detail (product_id, size, price)
            VALUES ${values} RETURNING *;
        `;

        // Execute the query
        const result = await db.query(query);

        // Return a success message with the number of rows inserted
        return {
            message: `${result.rowCount} product detail(s) successfully added.`,
            details: result.rows,
        };
    } catch (err) {
        console.error('Error adding product details:', err);
        throw err;
    }
};

module.exports = addProductDetail;
