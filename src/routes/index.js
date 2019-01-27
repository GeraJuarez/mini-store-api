const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({ info: 'Hola' });
});

module.exports = router;