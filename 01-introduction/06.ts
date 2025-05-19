function reverseDayOfWeek(day: string): void {

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,

    }
    console.log(Days[day as keyof typeof Days] || 'error');
}

reverseDayOfWeek('Monday')
reverseDayOfWeek('Friday')
reverseDayOfWeek('Invalid')

// Output:
// 1
// 5
// 'Invalid'