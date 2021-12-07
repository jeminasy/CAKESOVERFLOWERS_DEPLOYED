const express = require('express');
const cors = require('cors');
const {
    Custom,
    Base,
    Frosting,
    Addon,
    Design
} = require('../models/custom');

const router = express.Router();
router.use(cors());

router.get('/base', async (req, res) => {
    const base = await Base.find();
    res.send(base);
});

router.get('/frosting', async (req, res) => {
    const frosting = await Frosting.find();
    res.send(frosting);
});

router.get('/addon', async (req, res) => {
    const addon = await Addon.find();
    res.send(addon);
});

router.get('/design', async(req, res) => {
    const design = await Design.find();
    res.send(design);
});

module.exports = router;