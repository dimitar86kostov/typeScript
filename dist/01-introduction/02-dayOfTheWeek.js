"use strict";
function dayOfWeek(dayNum) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
    })(Days || (Days = {}));
    console.log(Days[dayNum] || 'error');
}
dayOfWeek(5);
