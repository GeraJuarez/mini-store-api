const productsService = require('../services/products.js');

const getProducts = async (req, res) => {
    try {
        const data = await productsService.getProducts();
        res.status(200).json(data);
    } catch(err) {
        res.status(404).json(err);
    }
}

module.exports = {
    getProducts,
};