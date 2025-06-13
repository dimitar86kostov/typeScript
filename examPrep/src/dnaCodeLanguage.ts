import { Language } from "./contracts/language";
import { DNABases } from "./types";

export class DNACodeLanguage implements Language {

    private _charset: Set<DNABases> = new Set(['A', 'C', 'G', 'T']);

    get charset() {
        return this._charset
    }

    isCompatibleToCharset(message: string): boolean {

        const chars = message.split('');
        // const allowedChars: string[] = Array.from(this.charset.values());
        // const isCompat = currentMessage.every(ch => allowedChars.includes(ch));

        return chars.every(char => this._charset.has(char as DNABases));

    }
}