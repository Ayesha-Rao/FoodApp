const express = require("express");
const router = express.Router();

// Mock database for the cart (in production, use a real database like MongoDB)
let cart = [];

// Add to cart route
router.post("/", (req, res) => {
  const { foodId, quantity } = req.body;

  // Validation
  if (!foodId || !quantity) {
    return res.status(400).json({ message: "Food ID and quantity are required." });
  }

  // Check if item already exists in the cart
  const existingItem = cart.find((item) => item.foodId === foodId);

  if (existingItem) {
    // Update the quantity of the existing item
    existingItem.quantity += quantity;
  } else {
    // Add the new item to the cart
    cart.push({ foodId, quantity });
  }

  return res.status(200).json({
    message: "Item added to cart successfully!",
    cart,
  });
});

// Get all cart items (optional route for debugging)
router.get("/", (req, res) => {
  return res.status(200).json(cart);
});

// Export the router
module.exports = router;
