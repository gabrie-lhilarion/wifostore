const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // Bearer token

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user;  // Add the user info to the request object
        next();  // Proceed to the next middleware or route handler
    });
};

// Example protected route
// app.get('/protected-endpoint', authenticateToken, (req, res) => {
//     res.json({ message: `Welcome, ${req.user.username}` });
// });
