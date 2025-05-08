
const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weatherController');
const { validateWeatherRequest } = require('../middlewares/weatherValidator');
const { weatherRateLimiter } = require('../middlewares/rateLimiter');

// GET /weather?city=London
router.get('/', weatherRateLimiter, validateWeatherRequest, getWeather);

module.exports = router;