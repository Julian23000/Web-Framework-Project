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
  imageSourceUrl: {
    type: String, // URL to the webpage where the image comes from
    required: false,
  },
});

module.exports = mongoose.model('Product', productSchema);
