function isNonEmptyStringArray(params:unknown) : params is string[] {
 
   return Array.isArray(params) && params.length >= 1 && params.every(el => typeof el == 'string')

}

let arr: unknown = ['test', '123'];

if(isNonEmptyStringArray(arr)) {

console.log(arr.length); // allowed

}