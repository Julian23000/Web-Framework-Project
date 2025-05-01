

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// // Initialize app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Test Route
// app.get('/', (req, res) => {
//   res.send('Weather Dashboard API is running 🚀');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





//const express = require('express');
//const cors = require('cors');
//require('dotenv').config();

//// Import routes
//const weatherRoutes = require('./routes/weatherRoutes');

// Initialize app
//const app = express();
//const PORT = process.env.PORT || 5000;

// Middlewares
//app.use(cors());
//app.use(express.json());

// Use Routes
//app.use('/weather', weatherRoutes);

// Test Route
//app.get('/', (req, res) => {
//  res.send('Weather Dashboard API is running 🚀');
//});

// Start server
//app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
//});


// src/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/weather', weatherRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Weather Dashboard API is running 🚀');
});

module.exports = app;
