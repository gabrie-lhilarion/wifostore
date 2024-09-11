// Module to create 'sales' table in PostgreSQL
// This module defines the structure of the 'sales' table, which stores details of each sale.

// Import the database connection module
const db = require('../../database/postgress');

/**
 * Asynchronous function to create the 'sales' table if it does not exist.
 * The 'sales' table will have the following fields:
 * - sale_id: Primary key (auto-incremented).
 * - customer_id: Foreign key linking to a 'customers' table (integer).
 * - total_amount: Total amount for the sale (numeric).
 * - sale_date: Date and time of the sale (timestamp).
 * - payment_method: Method of payment (string).
 * - status: Status of the sale (string).
 */
const createSalesTable = async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS sales (
                sale_id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users(id),
                total_amount DECIMAL(10, 2) NOT NULL,
                sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                payment_method VARCHAR(50),
                status VARCHAR(50) DEFAULT 'completed'
            );
        `);

        console.log("Table 'sales' created or already exists.");
    } catch (err) {
        console.error('Error creating the sales table:', err);
    }
};

// Export the function for use in other parts of the application
module.exports = createSalesTable;
