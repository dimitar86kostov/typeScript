export function decorator1(constructor) {
    return class extends constructor {
        _offset = 3;
    };
}
export function decorator2(target, methodName, descriptor) { }
export function decorator3(target, methodName, descriptor) { }
export function decorator4(constructor) {
    class ExtendedPartialMessageEncoder extends constructor {
        static forbiddenSymbols = ['_', ',', '.', '!', '?', '-', ';', ' ', '"', `'`];
    }
    return ExtendedPartialMessageEncoder;
}
// export function decorator4(constructor: typeof PartialMessageEncoder) {
//     const extra = [`"`, `'`];
//     for (const s of extra) {
//         if (!constructor.forbiddenSymbols.includes(s)) {
//             constructor.forbiddenSymbols.push(s);
//         }
//     }
// }
//# sourceMappingURL=decorators.js.map