/**
 * @module addProductDetail
 *
 * This module defines the `addProductDetail` function, which adds one or more product detail records to the database.
 * It allows for adding multiple product details from a single POST request.
 */

const db = require('../../database/postgress'); // Import the database module

const createProductDetailTable = require('./createProductDetailTable')


/**
 * Adds one or more product detail records to the `product_detail` table.
 * 
 * @param {Array<Object>} productDetails - An array of product detail objects. Each object contains `productId`, `size`, and `price` properties.
 * @returns {Promise<Object>} A promise that resolves to an object indicating the number of records inserted.
 * @throws {Error} Throws an error if there is a problem with the database insertion.
 */
const addProductDetail = async (productDetails) => {

    await createProductDetailTable();

    if (!Array.isArray(productDetails) || productDetails.length === 0) {
        throw new Error('Product details should be a non-empty array.');
    }

    try {
        // Construct the SQL query to insert multiple rows
        const values = productDetails.map((detail) => `('${detail.productId}', '${detail.size}', '${detail.price}')`).join(',');

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

/**
 * 
 * Sample data
 * [
 * { "productId": 3, "size": "3kg", "price": 59.99 },
 * { "productId": 3, "size": "5kg", "price": 69.99 },
 * ]
 */

module.exports = addProductDetail;
