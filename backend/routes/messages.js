const express = require('express');
const auth = require('../middleware/auth');
const Message = require('../models/Message');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { receiver, text, emotion = 'neutral' } = req.body;
  if (!receiver || !text) {
    return res.status(400).json({ error: 'receiver and text are required' });
  }

  const message = await Message.create({
    sender: req.user._id,
    receiver,
    text,
    emotion
  });

  return res.status(201).json(message);
});

router.get('/thread/:userId', auth, async (req, res) => {
  const { userId } = req.params;

  const thread = await Message.find({
    $or: [
      { sender: req.user._id, receiver: userId },
      { sender: userId, receiver: req.user._id }
    ]
  }).sort({ createdAt: 1 });

  return res.json(thread);
});

module.exports = router;
