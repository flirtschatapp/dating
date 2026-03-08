const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.get('/me', auth, async (req, res) => {
  return res.json(req.user);
});

router.put('/me', auth, async (req, res) => {
  const allowed = ['bio', 'interests', 'location', 'lifeGoals', 'auraColor', 'age', 'gender'];
  const updates = {};

  allowed.forEach((key) => {
    if (req.body[key] !== undefined) {
      updates[key] = req.body[key];
    }
  });

  const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password');
  return res.json(user);
});

router.get('/discover', auth, async (req, res) => {
  const users = await User.find({ _id: { $ne: req.user._id } })
    .select('name age bio interests auraColor lifeGoals premium')
    .limit(30);
  return res.json(users);
});

module.exports = router;
