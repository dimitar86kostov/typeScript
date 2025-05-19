function formatP(params:[string, number]) : string {
    
    return `Hello, my name is ${params[0]} and my age is ${params[1]}`
}

console.log(formatP(['Dimi', 38]));

// Output: 'Hello, my name is Dimi and my age is 38'