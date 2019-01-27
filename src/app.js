const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8080;
const version = 'v1';
const routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/${version}/`, routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`); // eslint-disable-line
});