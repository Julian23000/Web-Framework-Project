const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors'); // ✅ CORS to fix frontend-backend communication
const productRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes'); // ✅ Upload route

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // ✅ Allow frontend from different origin
app.use(express.json());

// Static folders
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '../store-frontend'))); // ✅ Serve frontend if needed

// Routes
app.use('/api/products', productRoutes);
app.use('/api/products/upload', uploadRoutes); // ✅ Handles image uploads

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
