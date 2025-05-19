"use strict";
function unknownResponse(params) {
    if ('value' in params && typeof params.value === 'string') {
        return params.value;
    }
    return '-';
}
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
