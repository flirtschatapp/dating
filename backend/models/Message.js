const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true, maxlength: 2000 },
    emotion: {
      type: String,
      enum: ['calm', 'romantic', 'fun', 'neutral'],
      default: 'neutral'
    },
    translatedText: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
