"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    roomNumber;
    price;
    numberOfGuests;
    constructor(price, roomNumber, numberOfGuests) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }
    get totalPrice() {
        return this.price * this.numberOfGuests;
    }
    get cancellationPrice() {
        return this.totalPrice * 0.8;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=apartment.js.map