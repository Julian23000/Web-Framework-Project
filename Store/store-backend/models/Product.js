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
    type: String,
    required: false,
  },
  imageSourceUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Product', productSchema);
