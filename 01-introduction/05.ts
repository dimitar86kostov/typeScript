function summarizePerson(id: number, fName: string, lName: string, age: number, midName?: string, hobbies?: string[], workInfo?: [string, number]):
    [number, string, number, string, string] {

    let name = '';

    if (midName) {
        name = fName + ' ' + midName + ' ' + lName;
    } else {
        name = fName + '' + lName;
    }

    let hobbiesResult;

    if (hobbies) {
        hobbiesResult = hobbies.join(', ');
    } else {
        hobbiesResult = '-';
    }

    let work;

    if (workInfo) {
        work = `${workInfo[0]} -> ${workInfo[1]}`
    } else {
        work = '-'
    }

    return [id, name, age, hobbiesResult, work]

}

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
