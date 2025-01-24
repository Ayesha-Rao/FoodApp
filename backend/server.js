const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Assuming you have a User model
require('dotenv').config(); // Make sure you load environment variables
const foodRoutes = require('./routes/foodroutes');
const cartRoutes = require('./routes/cartRoutes');


// Initialize the Express app
const app = express();
// Routes
app.use('/api/food', foodRoutes); // Food routes
app.use('/api/cart', cartRoutes); // Cart routes

// Enable CORS
app.use(cors({
  origin: '*',  // Temporarily allow all origins (make sure to update this for production)
}));

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection (replace <db_password> with your actual password)
mongoose.connect('mongodb+srv://ayeshasara002:IMRANkhan10@foodymoody.7qxch.mongodb.net/FoodyMoody?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      user: { name, email, _id: user._id }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: { name: user.name, email: user.email, _id: user._id }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Server listening on port 5000
app.listen(5000, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});
