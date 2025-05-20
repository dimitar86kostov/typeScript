"use strict";
function isNonEmptyStringArray(params) {
    return Array.isArray(params) && params.length >= 1 && params.every(el => typeof el == 'string');
}
let arr = ['test', '123'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
// Output: 2
//# sourceMappingURL=08.js.map