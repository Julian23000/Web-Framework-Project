jest.mock('../src/services/weatherService'); // ✅ adjust this path if weatherService is here

const { fetchWeatherData } = require('../src/services/weatherService');
const request = require('supertest');
const app = require('../src/index'); // assuming app.js is in the root


describe('GET /weather', () => {
  it('should return weather data for a valid city', async () => {
    fetchWeatherData.mockResolvedValue({
      name: 'London',
      main: { temp: 15, humidity: 60 },
      weather: [{ description: 'clear sky' }]
    });

    const res = await request(app).get('/weather?city=London');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      city: 'London',
      temperature: '15 °C',
      humidity: '60%',
      description: 'clear sky',
    });
  });
});
