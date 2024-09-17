<<<<<<< HEAD
/**
 * @module userTableCreator
 *
 * This module contains a function to create a `users` table in the PostgreSQL database if it does not already exist.
 * The table includes fields for storing personal information, address details, and a password.
 */

const db = require('../database/postgress'); // Import the database module

/**
 * Creates the `users` table in the specified PostgreSQL database if it does not already exist.
 * 
 * The `users` table will have the following columns:
 * - `id`: A unique identifier for each user (auto-incremented).
 * - `first_name`: The user's first name.
 * - `last_name`: The user's last name.
 * - `email`: The user's email address, which must be unique and not null.
 * - `phone`: The user's phone number.
 * - `state`: The state part of the user's address.
 * - `local_area`: The local area part of the user's address.
 * - `street`: The street part of the user's address.
 * - `house_number`: The house number part of the user's address.
 * - `password`: The hashed password for user authentication.
 * 
 * It first checks if the `users` table already exists. If not, it creates the table and logs a success message.
 * If the table already exists, it logs that the table already exists.
 *
 * @async
 * @function createUserTable
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const createUserTable = async () => {
    try {
        // Check if the table `users` exists in the current database
        const res = await db.query(
            `SELECT 1 FROM information_schema.tables WHERE table_name = 'users';`
        );

        if (res.rows.length === 0) {
            // Table `users` doesn't exist, so create it
            await db.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(100),
                    last_name VARCHAR(100),
                    email VARCHAR(100) UNIQUE NOT NULL,
                    phone VARCHAR(15) UNIQUE NOT NULL,
                    state VARCHAR(100),
                    local_area VARCHAR(100),
                    street VARCHAR(100),
                    house_number VARCHAR(10),
                    password VARCHAR(255) NOT NULL,
                    role INT DEFAULT 0 
                );
            `);
            console.log("Table 'users' created.");
        } else {
            console.log("Table 'users' already exists.");
        }
    } catch (err) {
        console.error('Error:', err); // Log any error that occurs during the database operations
    }
};



// export the function 
module.exports = createUserTable;
=======
/**
 * @module userTableCreator
 *
 * This module contains a function to create a `users` table in the PostgreSQL database if it does not already exist.
 * The table includes fields for storing personal information, address details, and a password.
 */

const db = require('../database/postgress'); // Import the database module

/**
 * Creates the `users` table in the specified PostgreSQL database if it does not already exist.
 * 
 * The `users` table will have the following columns:
 * - `id`: A unique identifier for each user (auto-incremented).
 * - `first_name`: The user's first name.
 * - `last_name`: The user's last name.
 * - `email`: The user's email address, which must be unique and not null.
 * - `phone`: The user's phone number.
 * - `state`: The state part of the user's address.
 * - `local_area`: The local area part of the user's address.
 * - `street`: The street part of the user's address.
 * - `house_number`: The house number part of the user's address.
 * - `password`: The hashed password for user authentication.
 * 
 * It first checks if the `users` table already exists. If not, it creates the table and logs a success message.
 * If the table already exists, it logs that the table already exists.
 *
 * @async
 * @function createUserTable
 * @throws {Error} Throws an error if there is a problem with the database query.
 */
const createUserTable = async () => {
    try {
        // Check if the table `users` exists in the current database
        const res = await db.query(
            `SELECT 1 FROM information_schema.tables WHERE table_name = 'users';`
        );

        if (res.rows.length === 0) {
            // Table `users` doesn't exist, so create it
            await db.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(100),
                    last_name VARCHAR(100),
                    email VARCHAR(100) UNIQUE NOT NULL,
                    phone VARCHAR(15) UNIQUE NOT NULL,
                    state VARCHAR(100),
                    local_area VARCHAR(100),
                    street VARCHAR(100),
                    house_number VARCHAR(10),
                    password VARCHAR(255) NOT NULL,
                    role INT DEFAULT 0 
                );
            `);
            console.log("Table 'users' created.");
        } else {
            console.log("Table 'users' already exists.");
        }
    } catch (err) {
        console.error('Error:', err); // Log any error that occurs during the database operations
    }
};

// Invoke the function to create the `users` table if it doesn't already exist
//createUserTable();

// export the function 
module.exports = createUserTable;
>>>>>>> ab3ec94ed277df8fe2d002be8685cd435aa30604
