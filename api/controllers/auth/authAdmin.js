/**
 * @module authAdmin
 *
 * This module provides middleware for checking if a user has admin privileges.
 * It checks the `role` of the authenticated user to ensure they have admin access.
 */

const authenticateToken = require('./auth'); // Reuse the token authentication middleware

/**
 * Middleware to check if the authenticated user is an admin.
 * 
 * Ensures that the user has a role of 9, which corresponds to admin privileges.
 * If the user is not an admin, returns a 403 Forbidden error.
 * 
 * @param {Object} req - The request object containing the authenticated user in `req.user`.
 * @param {Object} res - The response object to send error messages or proceed with the request.
 * @param {Function} next - The next middleware function in the route handler chain.
 * @returns {Object} Returns a 403 error if the user is not an admin.
 */
const checkAdmin = (req, res, next) => {
    if (req.user && req.user.role === 9) {
        next(); // User is an admin, proceed to the next middleware or route handler
    } else {
        return res.status(403).json({ message: 'Access denied: Admins only.' });
    }
};

/**
 * Middleware that combines token authentication and admin check.
 * Ensures that the request has a valid token and the user has admin privileges.
 * 
 * @param {Object} req - The request object containing the `Authorization` header.
 * @param {Object} res - The response object used to send error messages if the user is not an admin.
 * @param {Function} next - The next middleware function in the route handler chain.
 */

const authenticateAdmin = (req, res, next) => {
    authenticateToken(req, res, () => {
        checkAdmin(req, res, next);
    });
};

module.exports = authenticateAdmin;
