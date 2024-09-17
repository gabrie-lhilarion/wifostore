<<<<<<< HEAD
/**
 * @module getProductById
 *
 * This module defines the `getProductById` function used to retrieve a product and its associated details by product ID.
 * It queries both the `products` and `product_detail` tables to return a comprehensive product overview.
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Fetches a product by its ID from the `products` table, along with its associated details from the `product_detail` table.
 * 
 * @param {number} product_id - The ID of the product to fetch.
 * @returns {Promise<Object>} A promise that resolves to an object containing the product information and details.
 * @throws {Error} Throws an error if there is a problem with the database query or if the product is not found.
 */
const getProductById = async (product_id) => {
    if (!product_id) {
        throw new Error('Product ID is required to fetch a product.');
    }

    try {
        // Fetch product details from the products table
        const productResult = await db.query('SELECT * FROM products WHERE product_id = $1;', [product_id]);

        if (productResult.rows.length === 0) {
            throw new Error('Product not found.');
        }

        const product = productResult.rows[0];

        // Fetch associated product details from the product_detail table
        const detailResult = await db.query('SELECT item_id, size, price FROM product_detail WHERE product_id = $1;', [product_id]);

        // Attach the product details to the product object
        const productDetails = detailResult.rows; // List of size and price
        product.details = productDetails;

        return product; // Return the full product object with details
    } catch (err) {
        console.error('Error fetching product:', err);
        throw err;
    }
};

module.exports = getProductById;
=======
/**
 * @module getProductById
 *
 * This module defines the `getProductById` function used to retrieve a product and its associated details by product ID.
 * It queries both the `products` and `product_detail` tables to return a comprehensive product overview.
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Fetches a product by its ID from the `products` table, along with its associated details from the `product_detail` table.
 * 
 * @param {number} product_id - The ID of the product to fetch.
 * @returns {Promise<Object>} A promise that resolves to an object containing the product information and details.
 * @throws {Error} Throws an error if there is a problem with the database query or if the product is not found.
 */
const getProductById = async (product_id) => {
    if (!product_id) {
        throw new Error('Product ID is required to fetch a product.');
    }

    try {
        // Fetch product details from the products table
        const productResult = await db.query('SELECT * FROM products WHERE product_id = $1;', [product_id]);

        if (productResult.rows.length === 0) {
            throw new Error('Product not found.');
        }

        const product = productResult.rows[0];

        // Fetch associated product details from the product_detail table
        const detailResult = await db.query('SELECT size, price FROM product_detail WHERE product_id = $1;', [product_id]);

        // Attach the product details to the product object
        const productDetails = detailResult.rows; // List of size and price
        product.details = productDetails;

        return product; // Return the full product object with details
    } catch (err) {
        console.error('Error fetching product:', err);
        throw err;
    }
};

module.exports = getProductById;
>>>>>>> ab3ec94ed277df8fe2d002be8685cd435aa30604
