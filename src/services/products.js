const db = require('./database.js')
const Error = require('../utils/statusError')

const getProducts = async () => {
    return db.Products;
};

const getProductsById = async (productId) => {
    productInfo = db.Products[productId];
    if (productInfo == null) {
        throw new Error(404, 'Product does not exists'); 
    }
    return productInfo
};

const getPromotionsByProductId = async (productId) => {
    return db.Promotions[productId];
};

module.exports = {
    getProducts,
    getProductsById,
    getPromotionsByProductId,
};