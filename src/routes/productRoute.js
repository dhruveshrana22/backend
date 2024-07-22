const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes for product operations
router.get('/products', productController.getProducts);
router.post('/productsUpdate', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
