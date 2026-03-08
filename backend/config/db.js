const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    throw new Error('MONGO_URI is not configured');
  }

  await mongoose.connect(uri);
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');
}

module.exports = { connectDB };
