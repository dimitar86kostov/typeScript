function dayOfWeek(dayNum: number): void {

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,

    }
    console.log(Days[dayNum] || 'error');
}

dayOfWeek(5)

// Output: 'Friday'
