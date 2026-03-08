const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
  {
    fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['like', 'pass'], default: 'like' },
    compatibilityScore: { type: Number, min: 0, max: 100, default: 50 },
    matched: { type: Boolean, default: false }
  },
  { timestamps: true }
);

matchSchema.index({ fromUser: 1, toUser: 1 }, { unique: true });

module.exports = mongoose.model('Match', matchSchema);
