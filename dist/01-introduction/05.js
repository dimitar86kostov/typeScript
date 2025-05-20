"use strict";
function summarizePerson(id, fName, lName, age, midName, hobbies, workInfo) {
    let name = '';
    if (midName) {
        name = fName + ' ' + midName + ' ' + lName;
    }
    else {
        name = fName + '' + lName;
    }
    let hobbiesResult;
    if (hobbies) {
        hobbiesResult = hobbies.join(', ');
    }
    else {
        hobbiesResult = '-';
    }
    let work;
    if (workInfo) {
        work = `${workInfo[0]} -> ${workInfo[1]}`;
    }
    else {
        work = '-';
    }
    return [id, name, age, hobbiesResult, work];
}
console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
//# sourceMappingURL=05.js.map