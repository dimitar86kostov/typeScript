function unknownResponse(params:unknown) : string {
 
    if ('value' in (params as any) && typeof (params as any).value === 'string' ) {
        return (params as any).value
    }

    return '-'
}

console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
