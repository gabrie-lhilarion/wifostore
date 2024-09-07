/**
 * @module userLogin
 *
 * This module defines the `userLogin` function used for handling user login requests.
 * It checks the entered username and password against the database and generates a JWT token if the credentials are valid.
 */

const jwt = require('jsonwebtoken'); // Import the JSON Web Token package
const bcrypt = require('bcryptjs'); // Import the bcrypt package for password hashing
const db = require('../postgress'); // Import the database module

/**
 * Handles user login requests.
 * 
 * Validates the entered username and password. If the credentials are valid, generates a JWT token and sends it to the client.
 * If the credentials are invalid, sends an appropriate error response.
 * 
 * @param {Object} req - The request object from the client. Contains `username` and `password` in the request body.
 * @param {Object} res - The response object to send data back to the client.
 * @async
 * @function userLogin
 * @throws {Error} Throws an error if there is a problem with database queries or JWT generation.
 */
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Query the database for the user with the given username
        const result = await db.query('SELECT * FROM users WHERE email = $1;', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const user = result.rows[0];

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET, // Your JWT secret key (should be stored in an environment variable)
            { expiresIn: '1h' } // Token expiration time
        );

        // Send the token to the client
        res.json({ token });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Export the userLogin function for use in routes
module.exports = userLogin;
