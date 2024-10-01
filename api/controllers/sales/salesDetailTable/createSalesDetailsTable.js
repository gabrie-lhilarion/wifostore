// Module to create 'sales_details' table in PostgreSQL
// This module defines the structure of the 'sales_details' table, which stores details of individual items in each sale.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to create the 'sales_details' table if it does not exist.
 * The 'sales_details' table will have the following fields:
 * - sales_detail_id: Primary key (auto-incremented).
 * - sale_id: Foreign key linking to the 'sales' table.
 * - item_id: Foreign key linking to the 'product_detail' table.
 * - quantity: Number of items purchased (integer).
 * - unit_price: Price of the item at the time of sale (numeric).
 * - total_price: Calculated as quantity * unit_price (numeric).
 */
const createSalesDetailsTable = async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS sales_details (
                sales_detail_id SERIAL PRIMARY KEY,
                sale_id INT REFERENCES sales(sale_id) ON DELETE CASCADE,
                item_id INT REFERENCES product_detail(item_id),
                quantity INT NOT NULL,
                unit_price DECIMAL(10, 2) NOT NULL,
                total_price DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * unit_price) STORED
            );
        `);

        console.log("Table 'sales_details' created or already exists.");
    } catch (err) {
        console.error('Error creating the sales_details table:', err);
    }
};

// Export the function for use in other parts of the application
module.exports = createSalesDetailsTable;
