const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const User = require('../models/User');

const router = express.Router();

router.use(auth, admin);

router.get('/users', async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 }).limit(200);
  return res.json(users);
});

router.get('/revenue', async (req, res) => {
  const premiumCount = await User.countDocuments({ premium: true });
  const monthlyEstimateUsd = premiumCount * 12;
  return res.json({ premiumCount, monthlyEstimateUsd });
});

router.post('/ban-user/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: 'User removed' });
});

module.exports = router;
