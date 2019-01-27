class Receipt {
    constructor() {
        this.totalPrice = 0;
        this.itemsCount = 0;
        this.itemList = {};
        this.aplicablePromos = [];
    }
    addItem(id, item) {
        if (this.itemList.hasOwnProperty(id)) {
            this.itemList[id].quantity += 1;
        } else {
            item.quantity = 1;
            this.itemList[id] = item;    
        }

        this.itemsCount += 1;
        this.totalPrice += item.price;
    }
    applyDiscount(promoId, discount, itemId) {
        this.totalPrice -= discount;
        this.aplicablePromos.push({
            itemId,
            promoId,
            discount,
        });
    }
}

module.exports = Receipt;