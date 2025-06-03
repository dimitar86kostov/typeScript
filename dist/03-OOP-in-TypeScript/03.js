"use strict";
// Create a base class Vehicle with:
// · property: brand (string)
// · method: drive(): string returning "Driving a <brand>"
// Create a subclass Car that adds:
// · property: model (string)
// · method override: drive() returning "Driving a <brand> <model>"
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        return `Driving a ${this.brand}`;
    }
}
class Car extends Vehicle {
    model;
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    drive() {
        return `Driving a ${this.brand} ${this.model}`;
    }
}
const car = new Car("Toyota", "Corolla");
console.log(car.drive());
//# sourceMappingURL=03.js.map