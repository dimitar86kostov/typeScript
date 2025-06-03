"use strict";
class Personnn {
    fName;
    lName;
    age;
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.fName} ${this.lName} and I am ${this.age} years old`;
    }
}
const person = new Personnn("John", "Doe", 30);
console.log(person.introduce());
//# sourceMappingURL=01.js.map