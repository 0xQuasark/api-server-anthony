const request = require('supertest');
const express = require('express');
const app = express();
const Food = require('../models/food');
const Clothes = require('../models/clothes');

//mock routes for tests
app.use('/food', require('../routes/foodroute'));
app.use('/clothes', require('../routes/clothesroute'));

//test suite experiment, nested descriptions?
describe('API Server Testing', () => {

  it('handles invalid routes', async () => {
    const response = await request(app).get('/badroute');
    expect(response.status).toBe(404);
  });

  it('handles invalid method', async () => {
    const response = await request(app).post('/food/1');
    expect(response.status).toBe(404);
  });

  it('creates a record using POST', async () => {
    const response = await request(app).post('/food').send({
      name: 'Test Food',
      calories: 100
    });
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('Test Food');
    expect(response.body.calories).toEqual(100);
  });

  //need to add get put and delete tests for rest of food and do all tests for clothes routes
});