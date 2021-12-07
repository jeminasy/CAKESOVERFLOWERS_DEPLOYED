const express = require('express');
const cors = require('cors');
const { Dessert, Cake } = require('../models/product');

const router = express.Router();
router.use(cors());

//cookies and pastries
router.get('/pastry', async (req, res) => {
    const dessert = await Dessert.find();
    res.send(dessert);
});

router.get('/pastry/:id', async (req, res) => {
    const dessert = await Dessert.findById(req.params.id);
    if (!dessert) return res.status(404).send('Product no found :c');
    res.send(dessert);
});

//Cakes
router.get('/cake', async (req, res) => {
    const cake = await Cake.find();
    res.send(cake);
});

router.get('/cake/:id', async (req, res) => {
    const cake = await Cake.findById(req.params.id);
    if (!cake) return res.status(404).send('Product no found :c');
    res.send(cake);
});

module.exports = router;