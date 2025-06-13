import { processedChars } from "../types";

//DO NOT CHANGE
export interface MessageEncoder {
    encodeMessage(secretMessage: unknown): string;
    decodeMessage(secretMessage: unknown): string;
    totalProcessedCharacters(type: processedChars): string;
}