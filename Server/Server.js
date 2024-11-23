const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const User = require('./models/User');
const Contact = require("./models/Contact"); // Assuming you have your User model as explained earlier
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create an Express app
const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/Movie_db';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes for signup and login
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save the contact message to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while sending your message" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
