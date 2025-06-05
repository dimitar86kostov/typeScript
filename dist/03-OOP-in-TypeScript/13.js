"use strict";
// Create a class Product with:
// · static property productCount to track how many products were created, 
// protect it from being changed outside the class
// · readonly id: number (auto-incremented using productCount)
// · name: string – ensure a products name is at least 1 characters long
// · price: number – ensure the price is > 0
// · getDetails(): string method to print info about the product in format 
// "ID: <id>, Name: <name>, Price: $<price>"
// Create another class Inventory with:
// · private products: Product[]
// · method addProduct(product: Product): void
// · method listProducts(): string - returns 
// formatted info about products in the inventory each on a new line and then on the final line 
// prints the number of total products in the format "Total products created: <products count>"
// Use readonly, private, static, getters and setters and encapsulation appropriately.
class Product {
    static _productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        if (name.length < 1) {
            throw new Error("The product name is too short!");
        }
        if (price <= 0) {
            throw new Error("The product pricee is too small!");
        }
        Product._productCount++;
        this.id = Product._productCount;
        this._name = name;
        this._price = price;
    }
    static get productCount() {
        return Product._productCount;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        const productsDetails = this.products.map(p => p.getDetails()).join('\n');
        return `${productsDetails}\nTotal products created: ${Product.productCount}`;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
//# sourceMappingURL=13.js.map