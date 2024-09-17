// Module to create 'product_detail' table in a PostgreSQL database
// This module defines the structure of the 'product_detail' table, which stores specific details about each product.
// Each entry in the table is linked to a product in the 'products' table via a foreign key.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to create the 'product_detail' table if it does not exist.
 * The 'product_detail' table will have the following fields:
 * - product_id: Foreign key linking to the 'products' table (integer).
 * - size: Size of the product (string with a max length of 50).
 * - price: Price of the product (numeric field to accommodate decimal values).
 */
const createProductDetailTable = async () => {
    try {
        // Execute SQL query to create the 'product_detail' table if it doesn't exist
        await db.query(`
            CREATE TABLE IF NOT EXISTS product_detail (
                item_id SERIAL PRIMARY KEY, -- Unique identifier for each product detail
                product_id INT REFERENCES products(product_id) ON DELETE CASCADE,
                size VARCHAR(50),
                price DECIMAL(10, 2),
                UNIQUE(product_id, size) -- Optional: Enforce uniqueness for product_id and size combination
            );
        `);

        console.log("Table 'product_detail' created or already exists.");
    } catch (err) {
        console.log('Error creating the product_detail table:', err);
    }
};

// Export the function for use in other parts of the application
module.exports = createProductDetailTable;
