// Import the database connection module
const db = require('../../database/postgress');

// create product table if no product table
const createProductTable = require('./createProductTable');
createProductTable();

/**
 * Adds a new product to the 'products' table.
 * 
 * @param {Object} productDetails - The details of the product to add.
 * @param {string} productDetails.productName - The name of the product.
 * @param {string} productDetails.productDetail - A detailed description of the product.
 * @param {string} productDetails.skuNumber - The SKU number for the product, which must be unique.
 * @param {string} productDetails.productImageUrl - The URL of the product image.
 * 
 * @returns {Promise<Object>} - A promise that resolves to the result of the insert operation.
 * 
 * @throws {Error} - Throws an error if the product could not be added.
 */
const addProduct = async (productDetails) => {
    const { productName, productCategory, productDetail, skuNumber, productImageUrl } = productDetails;

    // SQL query to insert a new product into the 'products' table
    const query = `
        INSERT INTO products (product_name, product_category,  product_detail, sku_number, product_image_url)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING product_id, product_name, product_category,  product_detail, sku_number, product_image_url;
    `;

    // Values to be inserted into the table
    const values = [productName, productCategory, productDetail, skuNumber, productImageUrl];

    try {
        // Execute the query and return the result
        const result = await db.query(query, values);
        console.log('Product added:', result.rows[0]); // Log the added product
        return result.rows[0]; // Return the added product details
    } catch (err) {
        // Log and rethrow the error if something goes wrong
        console.error('Error adding product:', err);
        throw new Error('Could not add product.');
    }
};

// Export the function for use in other modules
module.exports = addProduct;
