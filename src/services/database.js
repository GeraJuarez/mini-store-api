const Products = {
    PANTS: {
        name: 'Pants',
        price: 5.0,
    },
    TSHIRT: {
        name: 'T-Shirt',
        price: 20.0,
    },
    HAT: {
        name: 'Hat',
        price: 7.5,
    }
}

const Promotions = {
    PANTS: {
        TWO_FOR_ONE: {
            quantityCondition: 2,
            discount: 5.0,
        }
    },
    TSHIRT: {
        BULK: {
            quantityCondition: 3,
            discount: 1.0,
        }
    }
}

module.exports = {
    Products,
    Promotions,
}