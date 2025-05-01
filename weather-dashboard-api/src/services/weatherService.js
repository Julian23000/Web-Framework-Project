

const axios = require('axios');

const fetchWeatherData = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

//   https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const response = await axios.get(url);

  return response.data;
};

module.exports = { fetchWeatherData };