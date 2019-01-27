const db = require('./database.js')

const getProducts = async () => {
    return db.Products;
};

const getProductsById = async (productId) => {
    return db.Products[productId];
};

module.exports = {
    getProducts,
    getProductsById,
};