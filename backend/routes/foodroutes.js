const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GET all food items (for the Food Page)
router.get('/', async (req, res) => {
  try {
    const foodItems = await Food.find(); // Fetch all food items
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food items', error });
  }
});

// GET a single food item by ID (for the Food Details Page)
router.get('/:id', async (req, res) => {
  try {
    const foodItem = await Food.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food item', error });
  }
});

module.exports = router;
