/**
 * This module sets up and runs an Express server for handling API routes and serving 
 * a React frontend. The Express server handles user account creation, login functionality, 
 * and serves the React app for client-side routing.
 *
 * The API routes include:
 *  - POST '/create-user': Creates a new user account after ensuring the database and table exist.
 *  - POST '/login': Authenticates the user and provides a token for further requests.
 * 
 * Additionally, the server serves static assets from the 'storefront/build' directory, which
 * contains the built React frontend. Any route that doesn't match an API endpoint is handled 
 * by the catch-all route ('*') which serves the React app.
 * 
 * The Express application listens on port 3000 by default.
 */

// Importing necessary modules: Express for setting up the server, Path for resolving directory paths,
// and user-defined controllers for handling user-related functionality.
const express = require('express');
const path = require('path');

// Destructuring the user-related functions from the controllers module.
// These functions handle tasks such as creating user accounts, creating databases and tables,
// and authenticating users.
const {
    createUserAccount,
    createUserTable,
    userLogin,
} = require("./api/controllers/users");

const createDatabase = require("./api/controllers/database/createDatabase")

// Initializing the Express application
const app = express();

// Middleware to parse incoming JSON request bodies. This allows the server to handle requests 
// with JSON payloads.
app.use(express.json());

// Serving static files from the 'storefront/build' directory. This is where the built React app
// resides after running a production build of the frontend.
app.use(express.static(path.join(__dirname, 'storefront/build')));


/**
 * Route for creating user accounts: 
 * This route ensures that the 'wifostore' database and 'users' table exist, 
 * then calls the 'createUserAccount' function to add a new user based on the request body.
 */
app.post('/create-user', async (req, res) => {
    await createDatabase('wifostore'); // Ensures the database exists.
    await createUserTable(); // Ensures the user table exists.

    try {
        // Creating a new user account based on the provided details (email, password, ...etc.).
        const user = await createUserAccount(req.body);
        res.status(201).json(user); // Responds with the created user's details upon success.
    } catch (err) {
        // If an error occurs during user creation, the server responds with a 500 status code
        // and an error message.
        res.status(500).json({ message: 'Failed to create user account.' });
    }
});

/**
 * Route for user login: 
 * This route accepts login credentials (email, password) and handles user authentication. 
 * If the login is successful, it returns a token for further authentication.
 */
app.post('/login', userLogin);

/**
 * Catch-all route handler for serving the React app:
 * Any request that doesn't match the API routes is handled by this route, which serves the 
 * 'index.html' file from the 'storefront/build' directory. This allows React Router to handle 
 * client-side routing.
 */
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'storefront/build', 'index.html'));
// });

/**
 * Starting the Express server on port 3000. The server listens for incoming connections and logs 
 * a message indicating that it is running.
 */
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
