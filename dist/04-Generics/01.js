"use strict";
// Write a generic function that takes in 4 arguments:
// · a – array of the generic type
// · aIndex – number
// · b – array of the generic type
// · bIndex – number
// The function then swaps the element at index aIndex in a with 
// the element at index bIndex in b
// The function doesn’t need to return anything; it directly mutates the arrays.
function swap(a, aIndex, b, bIndex) {
    const temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}
let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
// let a = [20, 30 , 40];
// let b = [1, 2, 3, 4, 5];
// swap<number>(a, 0, b, 2);
// console.log(a)
// console.log(b
//# sourceMappingURL=01.js.map