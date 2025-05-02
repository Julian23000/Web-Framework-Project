const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  imageUrl: {
    type: String, // URL to the image (hosted online or locally served)
    required: false,
  },
});

module.exports = mongoose.model('Product', productSchema);
