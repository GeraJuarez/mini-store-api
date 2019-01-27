const db = require('./database.js')

const getProducts = async () => {
    return db.Products;
};

const getProductsById = async (productId) => {
    return db.Products[productId];
};

const getPromotionsByProductId = async (productId) => {
    return db.Promotions[productId];
};

module.exports = {
    getProducts,
    getProductsById,
    getPromotionsByProductId,
};