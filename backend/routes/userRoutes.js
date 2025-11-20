const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // adjust path if needed

// Middleware to verify JWT token
function verifyUser(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Not logged in");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = decoded;
    next();
  });
}

// Login route
router.post('/login', loginUser);

// Protected profile route
router.get('/profile', verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;