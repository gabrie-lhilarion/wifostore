// Module to update a user's password in the 'users' table in PostgreSQL
// This module provides functionality for a user to change their password.

// Import the necessary modules
const bcrypt = require('bcryptjs');
const db = require('../database/postgress'); // Import the database connection module

/**
 * Asynchronous function to update a user's password in the 'users' table.
 * The function takes a user ID and a new password, hashes the password, and updates the database.
 * 
 * @param {number} userId - The unique identifier of the user whose password is being changed.
 * @param {string} newPassword - The new password to be set for the user.
 * 
 * @returns {Promise<string>} - A message indicating success or failure.
 * @throws {Error} - Throws an error if the update operation fails.
 */
const updatePassword = async (userId, newPassword) => {
    try {
        // Validate input
        if (!userId || !newPassword) {
            throw new Error('User ID and new password are required.');
        }

        // Hash the new password
        const saltRounds = 10; // Set the cost factor for hashing
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update the user's password in the database
        const query = `
            UPDATE users
            SET password = $1
            WHERE user_id = $2
            RETURNING *;
        `;

        const result = await db.query(query, [hashedPassword, userId]);

        if (result.rowCount === 0) {
            throw new Error('User not found or password update failed.');
        }

        return 'Password updated successfully.';
    } catch (err) {
        console.error('Error updating password:', err);
        throw err;
    }
};

// Export the function 
module.exports = updatePassword;
