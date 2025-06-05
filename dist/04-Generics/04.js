"use strict";
function conditionalNumber(params) {
    typeof params === 'number' ? console.log(params.toFixed(2)) : console.log(params);
}
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
//# sourceMappingURL=04.js.map