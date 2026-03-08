const Match = require('../models/Match');

const FREE_DAILY_LIMIT = 15;

function getDailyLimit(user) {
  return user.premium ? Infinity : FREE_DAILY_LIMIT;
}

async function getTodayLikeCount(userId) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  return Match.countDocuments({
    fromUser: userId,
    type: 'like',
    createdAt: { $gte: start, $lt: end }
  });
}

module.exports = { FREE_DAILY_LIMIT, getDailyLimit, getTodayLikeCount };
