"use strict";
function friday(arr) {
    let Month;
    (function (Month) {
        Month[Month["January"] = 0] = "January";
        Month[Month["February"] = 1] = "February";
        Month[Month["March"] = 2] = "March";
        Month[Month["April"] = 3] = "April";
        Month[Month["May"] = 4] = "May";
        Month[Month["June"] = 5] = "June";
        Month[Month["July"] = 6] = "July";
        Month[Month["August"] = 7] = "August";
        Month[Month["September"] = 8] = "September";
        Month[Month["October"] = 9] = "October";
        Month[Month["November"] = 10] = "November";
        Month[Month["December"] = 11] = "December";
    })(Month || (Month = {}));
    for (const element of arr) {
        if (element instanceof Date) {
            let dateOfMonth = element.getDate();
            let day = element.getDay();
            let month = element.getMonth();
            let year = element.getFullYear();
            if (dateOfMonth == 13 && day == 5) {
                console.log(`${dateOfMonth}-${Month[month]}-${year}`);
            }
        }
    }
}
console.log(friday([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
]));
// Output: 13-June-2025
//# sourceMappingURL=09.js.map