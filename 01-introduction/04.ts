function convertArr(arr: string[]): [string, number] {

    const text = arr.join('');

    return [text, text.length]
}

console.log(convertArr(['How', 'are', 'you?']));

// Output: ['Howareyou?', 10]
