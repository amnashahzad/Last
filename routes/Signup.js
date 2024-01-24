const User = require('../model/user')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// Import your User model here

router.post('/addUser', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user (adjust according to your User model)
    const newUser = User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // Save user in the database
    // await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering new user' });
  }
});

module.exports = router;
