const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '../store-frontend')));

// Serve static files from frontend
// app.use(express.static(path.join(__dirname, '../store-frontend')));

// Fallback to renamed HTML file for root path
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../store_index.html')); // change to your filename
// });

app.use('/api/products', productRoutes);
app.use('/api/products/upload', uploadRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
