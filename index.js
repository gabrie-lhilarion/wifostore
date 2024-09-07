const express = require('express');

const {
    createUserAccount,
    createDatabase,
    createUserTable,
    userLogin,
} = require("./api/controllers/users");

const app = express();
app.use(express.json()); // Parse incoming JSON request bodies

// Define the homepage function
const homepage = (req, res) => {
    res.json({
        page: 'home page',
        greetings: 'welcome'
    });
};

// Define the homepage route
app.get('/', homepage);
// Define a route for creating user accounts
app.post('/create-user', async (req, res) => {

    await createDatabase('wifostore');
    await createUserTable()

    try {
        const user = await createUserAccount(req.body); // Call the function with user-provided details
        res.status(201).json(user); // Respond with the created user details
    } catch (err) {
        const erroeMessage = { message: 'Failed to create user account.' }

        res.status(500).json(err);
    }
});

// Define the login route
app.post('/login', userLogin);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
