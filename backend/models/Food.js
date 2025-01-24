const mongoose = require('mongoose');

// Define the schema for Food items
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // Image URL
  description: { type: String, required: true },
  category: { type: String, required: false }, // Optional, e.g., "Beverages", "Snacks"
  createdAt: { type: Date, default: Date.now },
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
