const jwt = require('jsonwebtoken');

router.post('/loginUser', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user from database
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
      // User authenticated

      // Create token (adjust secret key and expiration)
      const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });

      res.json({ auth: true, token });
    } else {
      // Authentication failed
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during authentication' });
  }
});
