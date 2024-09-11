// Import the database connection module
const db = require('../../database/postgress');

const createSalesTable = require("./createSalesTable")
const createSalesDetailsTable = require('../salesDetailTable/createSalesDetailsTable')

await createSalesTable()
await createSalesDetailsTable()

/**
 * Function to post a new sale and its associated sale details.
 * Inserts data into both 'sales' and 'sales_details' tables as part of a transaction.
 *
 * @param {Object} saleData - An object containing sale and sale details data.
 * @param {number} saleData.customer_id - The ID of the customer making the purchase.
 * @param {string} saleData.payment_method - The method of payment for the sale.
 * @param {Array<Object>} saleData.items - An array of items, each containing:
 *   - item_id: The ID of the item from the product_detail table.
 *   - quantity: The number of items being purchased.
 *   - unit_price: The price of the item at the time of sale.
 * 
 * @returns {Object} Returns the result of the sale insertion.
 * @throws {Error} Throws an error if the transaction fails.
 */
const postSales = async (saleData) => {



    const client = await db.connect(); // Start a client connection
    try {
        const { customer_id, payment_method, items } = saleData;

        // Begin a transaction
        await client.query('BEGIN');

        // Insert into sales table
        const saleResult = await client.query(
            `INSERT INTO sales (customer_id, total_amount, payment_method, status)
             VALUES ($1, $2, $3, 'completed') RETURNING sale_id;`,
            [customer_id, calculateTotalAmount(items), payment_method]
        );

        const sale_id = saleResult.rows[0].sale_id; // Retrieve the generated sale_id

        // Insert each item into sales_details table
        for (const item of items) {
            await client.query(
                `INSERT INTO sales_details (sale_id, item_id, quantity, unit_price)
                 VALUES ($1, $2, $3, $4);`,
                [sale_id, item.item_id, item.quantity, item.unit_price]
            );
        }

        // Commit the transaction
        await client.query('COMMIT');

        return { sale_id, message: 'Sale posted successfully' };
    } catch (err) {
        // Rollback the transaction in case of an error
        await client.query('ROLLBACK');
        console.error('Error posting sale:', err);
        throw err;
    } finally {
        client.release(); // Release the client connection
    }
};

/**
 * Utility function to calculate the total amount for a sale based on the items.
 * 
 * @param {Array<Object>} items - An array of items, each containing:
 *   - quantity: The quantity of the item.
 *   - unit_price: The unit price of the item.
 * 
 * @returns {number} The total amount for the sale.
 */
const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.unit_price, 0);
};

// Export the postSales function for use in other parts of the application
module.exports = postSales;
