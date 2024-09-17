<<<<<<< HEAD
/**
 * @module updateProduct
 *
 * This module defines the `updateProduct` function used for updating existing product records in the database.
 * It allows updating the details of a product based on its `product_id`.
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Updates a product's details in the products table.
 * 
 * This function updates the specified fields of a product identified by `product_id`.
 * Fields that can be updated include `product_name`, `product_detail`, `sku_number`, and `product_image_url`.
 * 
 * @param {Object} productData - An object containing the product details to update. Must include `product_id`.
 * @param {number} productData.product_id - The ID of the product to update.
 * @param {string} [productData.product_name] - The new name of the product.
 * @param {string} [productData.product_detail] - The new details of the product.
 * @param {string} [productData.sku_number] - The new SKU number of the product.
 * @param {string} [productData.product_image_url] - The new image URL of the product.
 * @returns {Promise<void>} A promise that resolves when the product is successfully updated.
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const updateProduct = async (productData) => {
    const { product_id, product_name, product_detail, sku_number, product_image_url } = productData;

    if (!product_id) {
        throw new Error('Product ID is required to update a product.');
    }

    try {
        const updateFields = [];
        const values = [];

        if (product_name) {
            updateFields.push(`product_name = $${updateFields.length + 1}`);
            values.push(product_name);
        }

        if (product_detail) {
            updateFields.push(`product_detail = $${updateFields.length + 1}`);
            values.push(product_detail);
        }

        if (sku_number) {
            updateFields.push(`sku_number = $${updateFields.length + 1}`);
            values.push(sku_number);
        }

        if (product_image_url) {
            updateFields.push(`product_image_url = $${updateFields.length + 1}`);
            values.push(product_image_url);
        }

        if (updateFields.length === 0) {
            throw new Error('No fields to update.');
        }

        values.push(product_id);

        const query = `
            UPDATE products
            SET ${updateFields.join(', ')}
            WHERE product_id = $${values.length};
        `;

        await db.query(query, values);
        console.log('Product updated successfully.');

        return productData

    } catch (err) {
        console.error('Error updating product:', err);
        throw err;
    }
};

module.exports = updateProduct;
=======
/**
 * @module updateProduct
 *
 * This module defines the `updateProduct` function used for updating existing product records in the database.
 * It allows updating the details of a product based on its `product_id`.
 */

const db = require('../../database/postgress'); // Import the database module

/**
 * Updates a product's details in the products table.
 * 
 * This function updates the specified fields of a product identified by `product_id`.
 * Fields that can be updated include `product_name`, `product_detail`, `sku_number`, and `product_image_url`.
 * 
 * @param {Object} productData - An object containing the product details to update. Must include `product_id`.
 * @param {number} productData.product_id - The ID of the product to update.
 * @param {string} [productData.product_name] - The new name of the product.
 * @param {string} [productData.product_detail] - The new details of the product.
 * @param {string} [productData.sku_number] - The new SKU number of the product.
 * @param {string} [productData.product_image_url] - The new image URL of the product.
 * @returns {Promise<void>} A promise that resolves when the product is successfully updated.
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const updateProduct = async (productData) => {
    const { product_id, product_name, product_detail, sku_number, product_image_url } = productData;

    if (!product_id) {
        throw new Error('Product ID is required to update a product.');
    }

    try {
        const updateFields = [];
        const values = [];

        if (product_name) {
            updateFields.push(`product_name = $${updateFields.length + 1}`);
            values.push(product_name);
        }

        if (product_detail) {
            updateFields.push(`product_detail = $${updateFields.length + 1}`);
            values.push(product_detail);
        }

        if (sku_number) {
            updateFields.push(`sku_number = $${updateFields.length + 1}`);
            values.push(sku_number);
        }

        if (product_image_url) {
            updateFields.push(`product_image_url = $${updateFields.length + 1}`);
            values.push(product_image_url);
        }

        if (updateFields.length === 0) {
            throw new Error('No fields to update.');
        }

        values.push(product_id);

        const query = `
            UPDATE products
            SET ${updateFields.join(', ')}
            WHERE product_id = $${values.length};
        `;

        await db.query(query, values);

        console.log('Product updated successfully.');
    } catch (err) {
        console.error('Error updating product:', err);
        throw err;
    }
};

module.exports = updateProduct;
>>>>>>> ab3ec94ed277df8fe2d002be8685cd435aa30604
