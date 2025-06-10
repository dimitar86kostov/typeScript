"use strict";
function classDeco(constructor) {
}
class User1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayUserInfo() {
        return console.log(`${this.name}, Age: ${this.age}`);
    }
}
const user11 = new User1("John Doe", 30);
user11.displayUserInfo();
console.log(user11);
console.log(user11.createdOn);
//# sourceMappingURL=03.js.map