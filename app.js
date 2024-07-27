const express = require('express');
const app = express();
const connectDB = require('./config/db.config');
const routes = require('./routes');
const http = require('http');
require('dotenv').config();

const server = http.createServer(app);

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// Error handling middleware (optional but recommended)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});