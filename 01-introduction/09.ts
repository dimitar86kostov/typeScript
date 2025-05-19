function friday(arr: unknown[]): void {

    enum Month {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }

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