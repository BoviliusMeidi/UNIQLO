const express = require('express');
const { listProducts, uploadProduct } = require('../controllers/productController');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.get('/products', listProducts);
router.post('/products/upload', uploadMiddleware.single('image'), uploadProduct);

module.exports = router;
