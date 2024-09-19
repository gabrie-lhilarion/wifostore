// Import the database connection module
const db = require('../../database/postgress');

/**
 * Retrieves products grouped by their category.
 * 
 * @returns {Promise<Object>} A promise that resolves to an object where the keys
 * are categories and values are arrays of products.
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const getCategories = async () => {
    try {
        // Query to select all products and group them by category
        const result = await db.query(`
            SELECT product_category, json_agg(json_build_object(
                'product_id', product_id,
                'product_name', product_name,
                'product_detail', product_detail,
                'sku_number', sku_number,
                'product_image_url', product_image_url
            )) AS products
            FROM products
            GROUP BY product_category;
        `);

        // Return the grouped categories and their products
        const categories = {};
        result.rows.forEach(row => {
            categories[row.product_category] = row.products;
        });

        console.log(categories)
        return categories;

    } catch (err) {
        console.error('Error retrieving categories:', err);
        throw err;
    }
};


// Export the function for use in other parts of the application
module.exports = getCategories;
