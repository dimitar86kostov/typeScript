"use strict";
function evenSum(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum % 2 == 0;
}
console.log(evenSum(1, 2, 3));
