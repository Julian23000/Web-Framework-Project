

// // This will later call the OpenWeatherMap API
// const getWeather = (req, res) => {
//     const city = req.query.city;
  
//     if (!city) {
//       return res.status(400).json({ error: 'City parameter is required' });
//     }
  
//     // Mock response for now
//     res.json({
//       city: city,
//       temperature: '20°C',
//       humidity: '50%',
//       description: 'Clear sky',
//     });
//   };
  
//   module.exports = { getWeather };
  



const { fetchWeatherData } = require('../services/weatherService');

const getWeather = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const data = await fetchWeatherData(city);

    const formattedData = {
      city: data.name,
      temperature: `${data.main.temp} °C`,
      humidity: `${data.main.humidity}%`,
      description: data.weather[0].description,
    };

    res.json(formattedData);
  } catch (error) {
    console.error(error.response?.data || error.message);

    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: 'City not found' });
    } else {
      res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
  }
};

module.exports = { getWeather };