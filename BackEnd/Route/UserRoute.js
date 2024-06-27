const express = require('express');
const { addToCart, getAllCart } = require('../Controllers/UserController');
const router = express.Router();

router.post('/addToCart', addToCart);
router.get('/getAllCart', getAllCart);

module.exports = router;