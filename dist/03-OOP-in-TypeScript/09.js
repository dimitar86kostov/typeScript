"use strict";
// Create an abstract class Shape with:
// · property color: string
// · abstract method getArea(): number
// Create two subclasses that implement getArea.
// · Circle with property
// o radius: number
// · Rectangle with properties:
// o sideA: number
// o sideB: number
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    sideA;
    sideB;
    constructor(color, sideA, sideB) {
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
    }
    getArea() {
        return this.sideA * this.sideB;
    }
}
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
//# sourceMappingURL=09.js.map