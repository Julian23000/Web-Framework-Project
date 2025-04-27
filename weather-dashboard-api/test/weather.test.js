const request = require('supertest');
const express = require('express');
const weatherRoutes = require('../src/routes/weatherRoutes');

const app = express();
app.use(express.json());
app.use('/weather', weatherRoutes);

describe('GET /weather', () => {
  it('should return weather data for a valid city', async () => {
    const res = await request(app).get('/weather?city=London');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('city');
    expect(res.body).toHaveProperty('temperature');
    expect(res.body).toHaveProperty('humidity');
    expect(res.body).toHaveProperty('description');
  });
});
