const Receipt = require('../utils/receipt.js');
const productsService = require('../services/products.js');

const getProducts = async (req, res) => {
    try {
        const data = await productsService.getProducts();
        res.status(200).json(data);
    } catch(err) {
        res.status(404).json(err);
    }
}

const buyProducts = async (req, res) => {
    try {
        var receipt = new Receipt();
        let itemsId = req.body;

        for (var i = 0; i < itemsId.length; i++) {
            let itemInfo = await productsService.getProductsById(itemsId[i]);
            receipt.addItem(itemsId[i], itemInfo);
        }
        
        res.status(200).json(receipt);
    } catch (err) {
        res.status(404).json(err);
    }
}

module.exports = {
    getProducts,
    buyProducts,
};