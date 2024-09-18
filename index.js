const express = require('express');
const cors = require('cors');
const path = require('path');

const {
    createUserAccount,
    createUserTable,
    userLogin,
    updatePassword
} = require("./api/controllers/users");

const createDatabase = require("./api/controllers/database/createDatabase");

const {
    addProduct,
    deleteProduct,
    getProducts,
    getProductById,
    updateProduct,
    getCategories
} = require("./api/controllers/products/productTable")

const {
    addProductDetail,
    deleteItem,
    updateItem,
    getItemsList
} = require("./api/controllers/products/productDetailTable");

const postSales = require('./api/controllers/sales/salesTable/postSales');

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

app.post('/add-product', async (req, res) => {
    try {
        const product = await addProduct(req.body);

        if (product.error) {
            const error = product.error
            res.status(500).json({ error });
        } else {
            res.status(201).json(product); // Return the created product
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/categories', async (req, res) => {
    try {
        const categories = await getCategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error);

    }
})

app.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products); // Return the list of products
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (product) {
            res.status(200).json(product); // Return the product details
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/product', async (req, res) => {
    console.log(req.body)
    try {
        const updatedProduct = await updateProduct(req.body);
        res.status(200).json(updatedProduct); // Return the updated product
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.status(204).send(); // Send no content after deletion
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Product Detail-related routes
app.post('/product-details', async (req, res) => {
    try {
        const productDetail = await addProductDetail(req.body);
        res.status(201).json(productDetail); // Return the created product detail
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.put('/update-item', async (req, res) => {

    try {
        const updatedItem = await updateItem(req.body);
        res.status(200).json(updatedItem); // Return the updated item details
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/delete-item/:id', async (req, res) => {
    try {
        await deleteItem(req.params.id);
        res.status(204).send(); // Send no content after deletion
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  sales  
// Product Detail-related routes
app.post('/sales', async (req, res) => {
    try {
        const sales = await postSales(req.body);
        res.status(201).json(sales); // Return the created product detail
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/change-password', async (req, res) => {
    const { user_id, new_password } = req.body;

    try {
        const message = await updatePassword(user_id, new_password);
        res.json({ success: true, message });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// get product items
app.get('/items/:id', async (req, res) => {
    try {
        const items = await getItemsList(req.params.id);
        if (items) {
            res.status(200).json(items); // Return the product details
        } else {
            res.status(404).json({ message: 'No items not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/login', userLogin);

// Catch - All Route for serving the React app
// Uncomment before push
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'storefront/dist', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
