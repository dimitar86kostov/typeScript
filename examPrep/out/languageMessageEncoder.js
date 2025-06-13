"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    encodedCharsCount = 0;
    decodedCharsCount = 0;
    constructor(language, cipher) {
        super(language, cipher);
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length == 0) {
            return 'No message.';
        }
        let strippedMessage = this.stripForbiddenSymbols(secretMessage);
        let isCompatable = this.language.isCompatibleToCharset(strippedMessage);
        if (!isCompatable) {
            return 'Message not compatible.';
        }
        const encodedMessage = this.cipher.encipher(strippedMessage);
        this.encodedCharsCount += encodedMessage.length;
        return encodedMessage;
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length == 0) {
            return 'No message.';
        }
        let isCompatable = this.language.isCompatibleToCharset(secretMessage);
        if (!isCompatable) {
            return 'Message not compatible.';
        }
        const decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedCharsCount += decodedMessage.length;
        return decodedMessage;
    }
    totalProcessedCharacters(type) {
        let result = 0;
        switch (type) {
            case 'Encoded':
                result = this.encodedCharsCount;
                break;
            case 'Decoded':
                result = this.decodedCharsCount;
                break;
            case 'Both':
                result = this.encodedCharsCount + this.decodedCharsCount;
                break;
        }
        return `Total processed characters count: ${result}`;
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
}
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map