import { json } from 'express';
import db from '../../database/postgress';  // Assuming your database connection is set up like this

export const pricelistAction = async ({ request }) => {
    try {
        const formData = await request.formData();

        // Convert FormData to a structured object
        const newItems = [];
        formData.forEach((value, key) => {
            const [_, index, field] = key.match(/newItems\[(\d+)\]\[(\w+)\]/) || [];
            if (index !== undefined) {
                if (!newItems[index]) {
                    newItems[index] = {};
                }
                newItems[index][field] = value;
            }
        });

        // Insert each new item into the 'product_detail' table
        for (const item of newItems) {
            await db.query(
                'INSERT INTO product_detail (size, price) VALUES ($1, $2)',
                [item.size, item.price]
            );
        }

        return json({ success: true, message: 'Items added successfully' });
    } catch (error) {
        console.error('Error submitting pricelist:', error);
        return json({ success: false, message: 'Error adding items' });
    }
};

export default pricelistAction;
