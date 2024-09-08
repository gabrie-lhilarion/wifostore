// Module to create 'products' table
// This module defines the structure of the 'products' table, which holds the information about each product in the store.
// The table includes a unique product ID, product name, product details, SKU number, and a URL for the product image.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to create the 'products' table if it does not exist.
 * The 'products' table will have the following fields:
 * - product_id: Primary key for uniquely identifying each product (serial auto-incremented integer).
 * - product_name: Name of the product (string with a max length of 255 characters).
 * - product_detail: A brief description or additional information about the product (text field).
 * - sku_number: Unique identifier for stock-keeping purposes (non-null string with a max length of 100).
 * - product_image_url: URL of the product image (string with a max length of 255 characters).
 */
const createProductTable = async () => {
    try {
        // Execute SQL query to create the 'products' table if it doesn't exist
        await db.query(`
            CREATE TABLE IF NOT EXISTS products (
                product_id SERIAL PRIMARY KEY,
                product_name VARCHAR(255),
                product_category VARCHAR(255),
                product_detail TEXT,
                sku_number VARCHAR(100) UNIQUE NOT NULL,
                product_image_url VARCHAR(255)
            );
        `);
        console.log("Table 'products' created or already exists.");
    } catch (err) {
        console.error('Error creating the products table:', err);
    }
};


// Export the function for use in other parts of the application
module.exports = createProductTable;
