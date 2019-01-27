const db = require('./database.js')

const getProducts = async () => {
    return db.Products;
  };

module.exports = {
    getProducts,
};