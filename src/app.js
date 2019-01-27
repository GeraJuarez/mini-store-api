const express = require('express');

const app = express();

const port = 8080;
const version = 'v1';
const routes = require('./routes/index.js');

app.use(`/${version}/`, routes);

// START THE SERVER
app.listen(port, () => {
  console.log(`App running on port ${port}.`); // eslint-disable-line
});