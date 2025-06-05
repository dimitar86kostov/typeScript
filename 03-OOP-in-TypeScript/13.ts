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

    private static _productCount = 0;
    readonly id: number;
    private _name: string;
    private _price: number

    constructor(name: string, price: number) {

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

    public static get productCount(): number {
        return Product._productCount;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`
    }
}

class Inventory {

    private products: Product[] = [];


    addProduct(product: Product): void {
        this.products.push(product);

    }

    listProducts(): string {
        const productsDetails = this.products.map(p => p.getDetails()).join('\n');
        return `${productsDetails}\nTotal products created: ${Product.productCount}`
    }
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);

const product2 = new Product("Phone", 800);


inventory.addProduct(product1);

inventory.addProduct(product2)

console.log(inventory.listProducts());