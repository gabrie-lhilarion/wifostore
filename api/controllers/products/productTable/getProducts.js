/**
 * @module getProducts
 *
 * This module defines the `getProducts` function that retrieves products from the database with pagination support.
 * It returns up to 20 products at a time, along with associated product details (like size and price).
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Retrieves a paginated list of products, with up to 20 products per page.
 * 
 * @param {number} page - The page number to retrieve (starting from 1).
 * @returns {Promise<Object>} A promise that resolves to an object containing the paginated products and associated details.
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const getProducts = async (page = 1) => {
    const limit = 20; // Number of products per page
    const offset = (page - 1) * limit; // Calculate the offset for pagination

    try {
        // Query to fetch products with pagination
        const productResult = await db.query(
            'SELECT * FROM products ORDER BY product_id LIMIT $1 OFFSET $2;',
            [limit, offset]
        );

        const products = productResult.rows;

        if (products.length === 0) {
            return { message: 'No products found.' }; // Return an empty message if no products are found
        }

        // Fetch associated product details for each product
        const productDetailsPromises = products.map(async (product) => {
            const detailResult = await db.query(
                'SELECT size, price FROM product_detail WHERE product_id = $1;',
                [product.product_id]
            );
            product.details = detailResult.rows; // Attach the product details (size and price) to each product
            return product;
        });

        const productsWithDetails = await Promise.all(productDetailsPromises);

        return {
            page,
            products: productsWithDetails, // Paginated products with details
        };
    } catch (err) {
        console.error('Error fetching products:', err);
        throw err;
    }
};

module.exports = getProducts;
