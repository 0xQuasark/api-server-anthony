const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.post('/food', async (req, res) => {
    const food = await Food.create(req.body);
    res.json(food);
});

router.get('/food', async (req, res) => {
    const foods = await Food.findAll();
    res.json(foods);
  });
  
  router.get('/food/:id', async (req, res) => {
    const food = await Food.findByPk(req.params.id);
    res.json(food);
  });
  
  router.put('/food/:id', async (req, res) => {
    const food = await Food.update(req.body, {
      where: { id: req.params.id }
    });
    res.json(food);
  });
  
  router.delete('/food/:id', async (req, res) => {
    await Food.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: 'Food deleted' });
  });
  
  module.exports = router;