const express = require('express');
const { getCart, addCartItem, removeCartItem, updateCartItem } = require('../controllers/cartController');
const router = express.Router();

router.get('/cart', getCart);
router.post('/cart', addCartItem);
router.put('/cart/:id', updateCartItem);
router.delete('/cart/:id', removeCartItem);

module.exports = router;