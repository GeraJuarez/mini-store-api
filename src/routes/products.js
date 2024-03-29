const express = require('express');
const productsController = require('../controllers/products.js');
const router = express.Router();

router.get('/', productsController.getProducts);
router.post('/buy', productsController.buyProducts);

module.exports = router;