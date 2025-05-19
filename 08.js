function isNonEmptyStringArray(params) {
    return Array.isArray(params) && params.length >= 1 && params.every(function (el) { return typeof el == 'string'; });
}
var arr = ['test', '123'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
