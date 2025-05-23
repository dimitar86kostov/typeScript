
type codeType = { code: 200 | 201 | 301, text: string };
type printType = {code: 400 | 404 | 500, text: string, printChars?: number}

function HttpCodes(
    code: codeType | printType,
) {

if ('printChars' in code) {
    console.log(code.text.slice(0, code.printChars));
}else{
    console.log(code.text);
}

}

HttpCodes({ code: 200, text: 'OK' })
HttpCodes({ code: 400, text: 'Bad Request', printChars: 4 })
HttpCodes({ code: 201, text: 'Created'})
HttpCodes({ code: 404, text: 'Not Found'})
HttpCodes({ code: 404, text: 'Not Found', printChars: 3})
HttpCodes({ code: 500, text: 'Internal Server Error', printChars: 1})



// HttpCodes(
//     { code: 200, text: 'OK' },
//     { code: 201, text: 'Created' },
//     { code: 301, text: 'Moved Permanently' },
//     { code: 400, text: 'Bad Request', printChars?: number },
//     { code: 404, text: 'Not Found', printChars?: number },
//     { code: 500, text: 'Internal Server Error', printChars?: number },
// )