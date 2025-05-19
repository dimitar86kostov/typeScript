function friday(arr) {
    var Month;
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
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (element instanceof Date) {
            var dateOfMonth = element.getDate();
            var day = element.getDay();
            var month = element.getMonth();
            var year = element.getFullYear();
            if (dateOfMonth == 13 && day == 5) {
                console.log("".concat(dateOfMonth, "-").concat(Month[month], "-").concat(year));
            }
        }
    }
}
console.log(friday([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
]));
