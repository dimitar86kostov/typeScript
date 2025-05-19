"use strict";
function reverseDayOfWeek(day) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
    })(Days || (Days = {}));
    console.log(Days[day] || 'error');
}
reverseDayOfWeek('Monday');
reverseDayOfWeek('Friday');
reverseDayOfWeek('Invalid');
