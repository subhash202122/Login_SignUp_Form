const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// User registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, age, mobile, gender } = req.body;
    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      age,
      mobile,
      gender,
    });
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});
// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Validate the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});
// Retrieve user profile
// router.get('/profile', async (req, res) => {
//   try {
//     // In a real application, you'd use authentication to identify the user
//     // For simplicity, let's assume we have a user ID in the request headers
//     const userId = req.headers.userid;

//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to retrieve the user profile' });
//   }
// });
router.get("/profile/:id", async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the URL
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve the user profile" });
  }
});
// Update user profile
router.put("/profile", async (req, res) => {
  try {
    const userId = req.headers.userid;
    const { name, email } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update the user's profile data
    user.name = name;
    user.email = email;
    await user.save();
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update the user profile" });
  }
});
module.exports = router;
