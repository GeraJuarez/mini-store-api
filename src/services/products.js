const db = require('./database.js')
const Error = require('../utils/statusError.js')
const CODES = require('../utils/httpErrors.js')

const getProducts = async () => {
    return db.Products;
};

const getProductsById = async (productId) => {
    productInfo = db.Products[productId];
    if (productInfo == null) {
        throw new Error(CODES.STATUS.NOT_FOUND, CODES.MSG.NOT_FOUND_ITEM); 
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