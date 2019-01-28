# Mini store API

An API for a store that sells only three products. It enables the user to get information about the products and have the total price calculated when buying items from the store with promotions applied.

Code | Name | Price
-|-|-
PANTS | Pants | $5.00
TSHIRT | T-Shirt | $20.00
HAT | Hat | $7.50

## URL

`localhost:8080/api`

## Products

Actions related to products or items, such as consulting or buying a set of them.

### `GET` Products information

The endpoint `GET /products` retrieves information about all the porducts on the store.

### `POST` Buy products

The endpoint `POST /products/buy` calculate the total price of the products in the body parameters.

#### Body

Array of strings that contains the code products on the store.

```json
[
    "HAT", "HAT", "TSHIRT", "PANTS"
]
```


