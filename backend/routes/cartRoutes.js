const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// POST: Add an item to the cart
router.post('/add', async (req, res) => {
  const { userId, foodId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists for the user, create a new one
      cart = new Cart({
        userId,
        items: [{ foodId, quantity }],
        totalPrice: 0,
      });
    } else {
      // If cart exists, update it
      const existingItem = cart.items.find(item => item.foodId.toString() === foodId);

      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity
      } else {
        cart.items.push({ foodId, quantity }); // Add new item
      }
    }

    // Recalculate the total price
    cart.totalPrice = await calculateCartTotal(cart.items);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
});

// GET: Retrieve the cart for a user
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.foodId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error });
  }
});

// Utility function to calculate total price
async function calculateCartTotal(items) {
  const total = items.reduce(async (acc, item) => {
    const food = await Food.findById(item.foodId);
    return acc + food.price * item.quantity;
  }, 0);
  return total;
}

module.exports = router;
