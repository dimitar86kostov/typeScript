"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    rooms = new Map();
    bookings = new Map();
    totalBudget = 0;
    getTotalBudget() {
        return `Motel: ${MonthlyMotel.MotelName}\nTotal budget: $${this.totalBudget.toFixed(2)}`;
    }
    addRoom(room) {
        if (typeof room !== 'object' ||
            room === null ||
            !('roomNumber' in room) ||
            !('totalPrice' in room) ||
            !('cancellationPrice' in room)) {
            return 'Value was not a Room.';
        }
        const { roomNumber, totalPrice, cancellationPrice } = room;
        if (typeof roomNumber !== 'string' ||
            !['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(roomNumber) ||
            typeof totalPrice !== 'number' ||
            typeof cancellationPrice !== 'number') {
            return 'Value was not a Room.';
        }
        const currentRoom = room;
        if (this.rooms.has(currentRoom.roomNumber)) {
            return `Room '${currentRoom.roomNumber}' already exists.`;
        }
        this.rooms.set(currentRoom.roomNumber, currentRoom);
        this.bookings.set(currentRoom.roomNumber, new Set());
        return `Room '${currentRoom.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        const room = this.rooms.get(roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const roomBookings = this.bookings.get(roomNumber);
        if (roomBookings.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        roomBookings.add(bookedMonth);
        this.totalBudget += room.totalPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        const room = this.rooms.get(roomNumber);
        if (!room) {
            return `Room ${roomNumber} does not exist.`;
        }
        const roomBookings = this.bookings.get(roomNumber);
        if (!roomBookings?.has(bookedMonth)) {
            return `Room ${roomNumber} is not booked for ${bookedMonth}.`;
        }
        roomBookings.delete(bookedMonth);
        this.totalBudget -= room.cancellationPrice;
        return `Booking cancelled for Room ${roomNumber} for ${bookedMonth}.`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
// let motel = new MonthlyMotel<SummerMonth>();
// let roomA02: Room = new AirconditionedRoom(130, 'A02');
// let roomB01: Room = new AirconditionedRoom(50, 'B01');
// console.log(motel.addRoom(roomA02));// Room 'A02' added.
// console.log(motel.addRoom(roomB01));// Room 'B01' added.
// console.log(motel.getTotalBudget());// Motel: Motel// Total budget: $0.00
// console.log(motel.bookRoom('A02', SummerMonth.August));// Room 'A02' booked for 'August'.
// console.log(motel.bookRoom('B01', SummerMonth.July));// Room 'B01' booked for 'July'.
// console.log(motel.bookRoom('B01', SummerMonth.September));// Room 'B01' booked for 'September'.
// console.log(motel.getTotalBudget());/ Motel: Motel// Total budget: $230.00
// console.log(motel.cancelBooking('B01',SummerMonth.September));// Booking cancelled for Room 'B01' for 'September'.
// console.log(motel.getTotalBudget());
// Motel: Motel
// Total budget: $180.00
//# sourceMappingURL=monthlyMotel.js.map