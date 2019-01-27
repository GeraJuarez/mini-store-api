const Receipt = require('../utils/receipt.js');
const productsService = require('../services/products.js');
const CODES = require('../utils/httpErrors.js')

function applicableForDiscount(promotionQuantity, quantityBought) {
    return quantityBought >= promotionQuantity;
}

function calculateDiscount(type, discount, quantityBought) {
    let deduction = 0;
    switch(type) {
        case 'TWO_FOR_ONE': {
            deduction += Math.floor(quantityBought / 2) * discount;
            return deduction;
        }
        case 'BULK': {
            deduction += quantityBought * discount;
            return deduction;
        }
        default: return deduction;
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await productsService.getProducts();
        res.status(CODES.STATUS.OK).json(data);
    } catch(err) {
        res.status(err.code).send({ error: err.msg});
    }
}

const buyProducts = async (req, res) => {
    try {
        var receipt = new Receipt();
        let itemsId = req.body;

        for (let i = 0; i < itemsId.length; i++) {
            let itemInfo = await productsService.getProductsById(itemsId[i]);
            receipt.addItem(itemsId[i], itemInfo);
        }

        for (let [id, item] of Object.entries(receipt.itemList)) {
            let itemPromos = await productsService.getPromotionsByProductId(id);
            if (itemPromos == null) continue;

            for (let [promoId, promo] of Object.entries(itemPromos)) {
                if (applicableForDiscount(promo.quantityCondition, item.quantity)) {
                    let discount = calculateDiscount(promoId, promo.discount, item.quantity);
                    receipt.applyDiscount(promoId, discount, id);
                }
            }
        }
        
        res.status(CODES.STATUS.OK).json(receipt);
    } catch (err) {
        res.status(err.code).send({ error: err.msg});
    }
}

module.exports = {
    getProducts,
    buyProducts,
};