const express = require('express');
const router = express.Router();
const Clothes = require('../models/clothes');

router.post('/clothes', async (req, res) => {
    const clothes = await Clothes.create(req.body);
    res.json(clothes);
});

router.get('/clothes', async (req, res) => {
    const clothes = await Clothes.findAll();
    res.json(clothes);
  });
  
  router.get('/clothes/:id', async (req, res) => {
    const clothes = await Clothes.findByPk(req.params.id);
    res.json(clothes);
  });
  
  router.put('/clothes/:id', async (req, res) => {
    const clothes = await Clothes.update(req.body, {
      where: { id: req.params.id }
    });
    res.json(clothes);
  });
  
  router.delete('/clothes/:id', async (req, res) => {
    await Clothes.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: 'Clothes deleted' });
  });
  
  module.exports = router;