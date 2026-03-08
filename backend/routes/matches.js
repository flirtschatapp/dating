const express = require('express');
const auth = require('../middleware/auth');
const Match = require('../models/Match');
const { getDailyLimit, getTodayLikeCount, FREE_DAILY_LIMIT } = require('../services/matchLimit');

const router = express.Router();

router.post('/like', auth, async (req, res) => {
  const { targetId, compatibilityScore = 50 } = req.body;
  if (!targetId) {
    return res.status(400).json({ error: 'targetId is required' });
  }

  const limit = getDailyLimit(req.user);
  const todayCount = await getTodayLikeCount(req.user._id);

  if (todayCount >= limit) {
    return res.status(403).json({
      error: 'Daily like limit reached for free plan',
      freeLimit: FREE_DAILY_LIMIT,
      todayCount
    });
  }

  const match = await Match.findOneAndUpdate(
    { fromUser: req.user._id, toUser: targetId },
    {
      fromUser: req.user._id,
      toUser: targetId,
      type: 'like',
      compatibilityScore
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  const mutual = await Match.findOne({ fromUser: targetId, toUser: req.user._id, type: 'like' });
  if (mutual && !match.matched) {
    match.matched = true;
    await match.save();
  }

  return res.json({ message: 'Liked', match, mutual: Boolean(mutual) });
});

router.get('/mine', auth, async (req, res) => {
  const likes = await Match.find({ fromUser: req.user._id }).populate('toUser', 'name auraColor premium');
  return res.json(likes);
});

module.exports = router;
