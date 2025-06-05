type inputExampleType<T> = T extends number ? number : string;

function conditionalNumber<T>(params: inputExampleType<T>) {

    typeof params === 'number' ? console.log(params.toFixed(2)) : console.log(params);
    

}

conditionalNumber<number>(20.3555);

conditionalNumber<string>('wow');

conditionalNumber<boolean>('a string');