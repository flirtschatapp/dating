const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    age: { type: Number, min: 18, max: 99 },
    gender: { type: String },
    interests: { type: [String], default: [] },
    bio: { type: String, maxlength: 500 },
    location: { type: String },
    lifeGoals: { type: [String], default: [] },
    auraColor: { type: String, default: 'electric-cyan' },
    premium: { type: Boolean, default: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
