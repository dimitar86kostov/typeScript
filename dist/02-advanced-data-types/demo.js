"use strict";
function resultStudentInfo(student) {
    console.log(`Congrats ${student.fName}, age: ${student.age}, you are honored with ${student.grade} in ${student.school}!`);
}
let Dimi = {
    fName: 'Dimitar Kostov',
    high: 172,
    age: 38,
    grade: 6,
    school: 'softuni',
    address: 'Mladost'
};
resultStudentInfo(Dimi);
let partialPointt = {
    x: 5,
    y: 10
};
let originPointt = {
    x: 0,
    y: 0
};
function cordinateChanging(point, coordinateName, newValue) {
    point[coordinateName] = newValue;
}
cordinateChanging(originPointt, 'x', 5);
console.log(originPointt);
class Cat {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    makesound() {
        console.log('meow');
    }
}
const kitty = new Cat('Kitty', 2);
kitty.makesound();
//# sourceMappingURL=demo.js.map