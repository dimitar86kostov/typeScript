import { Room } from './contracts/room.js';
import { RoomNumber } from './types.js';

export class Apartment implements Room {
    public readonly roomNumber: RoomNumber;
    private readonly price: number;
    private readonly numberOfGuests: number;

    constructor(price: number, roomNumber: RoomNumber, numberOfGuests: number) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }

    public get totalPrice(): number {
        return this.price * this.numberOfGuests;
    }

    public get cancellationPrice(): number {
        return this.totalPrice * 0.8;
    }
}


