"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNACodeLanguage = void 0;
class DNACodeLanguage {
    _charset = new Set(['A', 'C', 'G', 'T']);
    get charset() {
        return this._charset;
    }
    isCompatibleToCharset(message) {
        const chars = message.split('');
        // const allowedChars: string[] = Array.from(this.charset.values());
        // const isCompat = currentMessage.every(ch => allowedChars.includes(ch));
        return chars.every(char => this._charset.has(char));
    }
}
exports.DNACodeLanguage = DNACodeLanguage;
//# sourceMappingURL=dnaCodeLanguage.js.map