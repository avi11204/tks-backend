const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude password from result
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// GET users by role (optional route)
router.get('/role/:role', async (req, res) => {
  try {
    const role = req.params.role.toLowerCase();
    const users = await User.find({ role: { $regex: new RegExp(`^${role}$`, 'i') } }, '-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users by role' });
  }
});

module.exports = router;
