function convertArr(arr) {
    var text = arr.join('');
    return [text, text.length];
}
console.log(convertArr(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
