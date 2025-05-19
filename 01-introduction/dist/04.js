"use strict";
function convertArr(arr) {
    const text = arr.join('');
    return [text, text.length];
}
console.log(convertArr(['How', 'are', 'you?']));
