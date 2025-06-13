import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { processedChars } from "./types";

export class LanguageMessageEncoder<TLang extends Language, TCipher extends Cipher<TLang>> extends PartialMessageEncoder implements MessageEncoder {

    private encodedCharsCount = 0;
    private decodedCharsCount = 0;

    constructor(language: TLang, cipher: TCipher) {
        super(language, cipher);
    }

    public encodeMessage(secretMessage: unknown) {

        if (typeof secretMessage !== 'string' || secretMessage.length == 0) {
            return 'No message.';
        }

        let strippedMessage = this.stripForbiddenSymbols(secretMessage)
        let isCompatable = this.language.isCompatibleToCharset(strippedMessage);

        if (!isCompatable) {
            return 'Message not compatible.';
        }

        const encodedMessage = this.cipher.encipher(strippedMessage);

        this.encodedCharsCount += encodedMessage.length;

        return encodedMessage;
    }

    public decodeMessage(secretMessage: unknown): string {

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

    public totalProcessedCharacters(type: processedChars): string {

        let result = 0;

        switch (type) {
            case 'Encoded': result = this.encodedCharsCount; break
            case 'Decoded': result = this.decodedCharsCount; break
            case 'Both': result = this.encodedCharsCount + this.decodedCharsCount; break
        }

        return `Total processed characters count: ${result}`

    }


    protected stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }

}
