const User = require('../models/user')
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

module.exports = router;