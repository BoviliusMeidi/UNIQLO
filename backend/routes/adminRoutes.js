const express = require('express');
const {listUsers, removeUser } = require('../controllers/userController');
const { listProducts, makeProduct, editProduct, removeProduct, uploadProductImage } = require('../controllers/productController');
const { listCarts, removeCart } = require('../controllers/cartController');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const router = express.Router();

// users
router.get('/users', listUsers);
router.delete('/users/:id', removeUser);

// products
router.get('/products', listProducts);
router.post('/product/upload', uploadMiddleware.single('image'), uploadProductImage);
router.get('/products', makeProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', removeProduct);

// carts
router.get('/carts', listCarts);
router.delete('/carts/:id', removeCart);

module.exports = router;