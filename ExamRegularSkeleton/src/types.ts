import { SummerMonth, WinterMonth } from "./contracts/util";

export type RoomNumber = 'A01' | 'A02' | 'A03' | 'B01' | 'B02' | 'B03';
export type AllowedMonth = WinterMonth | SummerMonth;
export type Month = keyof typeof WinterMonth | keyof typeof SummerMonth;