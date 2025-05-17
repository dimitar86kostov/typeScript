function summarizePerson(id, fName, lName, age, midName, hobbies, workInfo) {
    var name = '';
    if (midName) {
        name = fName + ' ' + midName + ' ' + lName;
    }
    else {
        name = fName + '' + lName;
    }
    var hobbiesResult;
    if (hobbies) {
        hobbiesResult = hobbies.join(', ');
    }
    else {
        hobbiesResult = '-';
    }
    var work;
    if (workInfo) {
        work = "".concat(workInfo[0], " -> ").concat(workInfo[1]);
    }
    else {
        work = '-';
    }
    return [id, name, age, hobbiesResult, work];
}
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
