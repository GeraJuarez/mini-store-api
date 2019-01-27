const express = require('express');
const products= require('./products.js');
const router = express.Router();

router.get('/', (request, response) => {
  response.json({ info: 'Hola a EasyLex' });
});

router.use('/products', products);

module.exports = router;