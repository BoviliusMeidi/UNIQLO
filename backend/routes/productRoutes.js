const express = require('express');
const { listProducts, uploadProduct, listProductsbyID } = require('../controllers/productController');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.get('/products', listProducts);
router.get('/products/:id', listProductsbyID);
router.post('/product/upload', uploadMiddleware.single('image'), uploadProduct);

module.exports = router;
