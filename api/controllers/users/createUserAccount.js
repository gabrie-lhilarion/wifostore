/**
 * @module userAccountCreator
 *
 * This module defines the `createUserAccount` function that takes 
 * user-provided details and inserts them into the `users` table 
 * in the PostgreSQL database.
 * It hashes the user's password before storing it in the database 
 * to ensure security.
 */

const bcrypt = require('bcryptjs'); // Import bcrypt for hashing passwords
const db = require('../database/postgress'); // Import the database connection module

const SALT_ROUNDS = 10; // Define the number of salt rounds for password hashing

/**
 * Creates a new user account in the database with the provided user details.
 * 
 * This function takes in user details such as first name, last name, 
 * email, phone, state, local area, street, house number, and password.
 * It hashes the password before inserting the user data into the `users` 
 * table in the PostgreSQL database.
 * 
 * The `users` table includes the following fields:
 * - `first_name`: The user's first name.
 * - `last_name`: The user's last name.
 * - `email`: The user's email, which must be unique.
 * - `phone`: The user's phone number.
 * - `state`: The state part of the user's address.
 * - `local_area`: The local area part of the user's address.
 * - `street`: The street part of the user's address.
 * - `house_number`: The house number part of the user's address.
 * - `password`: The user's password, which is hashed before being stored.
 * 
 * @async
 * @function createUserAccount
 * @param {Object} userDetails - An object containing user details such as 
 * first name, last name, email, phone, state, local area, street, 
 * house number, and password.
 * 
 * @returns {Promise<Object>} - Returns an object with the inserted 
 * user's ID and email if successful.
 * 
 * @throws {Error} Throws an error if there is a problem with database 
 * insertion or password hashing.
 */
const createUserAccount = async (userDetails) => {
    const {
        first_name,
        last_name,
        email,
        phone,
        state,
        local_area,
        street,
        house_number,
        password
    } = userDetails;




    try {
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Insert the new user details into the `users` table
        const result = await db.query(
            `INSERT INTO users (first_name, last_name, email, phone, state, local_area, street, house_number, password)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING id, email;`, // Returning user ID and email after insertion
            [
                first_name,
                last_name,
                email,
                phone,
                state,
                local_area,
                street,
                house_number,
                hashedPassword
            ]
        );

        // Return the new user's ID and email
        return result.rows[0];

    } catch (err) {
        console.error('Error creating user account:', err.detail);
        return (err);
    }
};

// Example usage
// const newUserDetails = {
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john1.doe@example.com',
//     phone: '12345678901',
//     state: 'California',
//     local_area: 'LA County',
//     street: 'Main St',
//     house_number: '123',
//     password: 'secretPassword123'
// };

// createUserAccount(newUserDetails)

module.exports = createUserAccount; 
