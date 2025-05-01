const rateLimit = require('express-rate-limit');
const weatherRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limits each IP to 5 requests per minute
  message: 'Too many requests, please try again later.',
});
module.exports = { weatherRateLimiter };
