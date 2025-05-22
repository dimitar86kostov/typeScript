"use strict";
function operator(param, operation, operand) {
    if (operation == 'Index' && typeof param != 'number') {
        return param[operand];
    }
    if (operation == 'Length' && typeof param != 'number') {
        return param.length % operand;
    }
    if (operation == 'Add' && !Array.isArray(param)) {
        return Number(param) + operand;
    }
}
console.log(operator('string', 'Index', 1));
//# sourceMappingURL=02.js.map