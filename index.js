const express = require('express');
const cors = require('cors');
const path = require('path');

// Import your controller functions
const {
    createUserAccount,
    createUserTable,
    userLogin,
} = require("./api/controllers/users");
const createDatabase = require("./api/controllers/database/createDatabase");

// Initialize the Express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Allow requests from different origins (Vite's development server runs on a different port)
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL in production
    methods: ['GET', 'POST'],
    credentials: true
}));

// Serve static files from the 'storefront/dist' directory
app.use('/storefront', express.static(path.join(__dirname, 'storefront/dist')));

// Serve static files from the 'storefront/dist' directory
app.use(express.static(path.join(__dirname, 'storefront/dist/assets')));

// API Routes
app.post('/create-user', async (req, res) => {
    await createDatabase('wifostore'); // Ensure the database exists
    await createUserTable(); // Ensure the user table exists

    try {
        // Create a new user account based on the provided details
        const user = await createUserAccount(req.body);


        res.status(201).json(user); // Respond with the created user's details
    } catch (err) {
        // Handle errors
        console.log(err)
        res.status(500).json({ message: 'Failed to create user account.' });
    }
});

app.post('/login', userLogin);

// Catch-All Route for serving the React app
// This should be after your static file serving middleware
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'storefront/dist', 'index.html'));
// });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
