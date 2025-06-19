import { AirconditionedRoom } from "./contracts/airconditionedRoom";
import { Motel } from "./contracts/motel";
import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { SummerMonth, WinterMonth } from "./contracts/util";
import { Room } from './contracts/room.js';
import { AllowedMonth, RoomNumber, Month } from "./types";

export class MonthlyMotel<T extends AllowedMonth> extends PartialMonthlyMotel implements Motel {

    private readonly rooms: Map<RoomNumber, Room> = new Map();
    private readonly bookings: Map<RoomNumber, Set<T>> = new Map();
    private totalBudget: number = 0;



    public getTotalBudget(): string {

        return `Motel: ${MonthlyMotel.MotelName}\nTotal budget: $${this.totalBudget.toFixed(2)}`
    }

    public addRoom(room: unknown): string {

        if (
            typeof room !== 'object' ||
            room === null ||
            !('roomNumber' in room) ||
            !('totalPrice' in room) ||
            !('cancellationPrice' in room)
        ) {
            return 'Value was not a Room.';
        }

        const { roomNumber, totalPrice, cancellationPrice } = room as {
            roomNumber: unknown;
            totalPrice: unknown;
            cancellationPrice: unknown;
        };

        if (
            typeof roomNumber !== 'string' ||
            !['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(roomNumber) ||
            typeof totalPrice !== 'number' ||
            typeof cancellationPrice !== 'number'
        ) {
            return 'Value was not a Room.';
        }

        const currentRoom = room as Room;

        if (this.rooms.has(currentRoom.roomNumber)) {
            return `Room '${currentRoom.roomNumber}' already exists.`;
        }

        this.rooms.set(currentRoom.roomNumber, currentRoom);
        this.bookings.set(currentRoom.roomNumber, new Set<T>());
        return `Room '${currentRoom.roomNumber}' added.`;
    }

    public bookRoom(roomNumber: RoomNumber, bookedMonth: T): string {
        const room = this.rooms.get(roomNumber);

        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }

        const roomBookings = this.bookings.get(roomNumber)!;
        if (roomBookings.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }

        roomBookings.add(bookedMonth);
        this.totalBudget += room.totalPrice;

        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    public cancelBooking(roomNumber: RoomNumber, bookedMonth: T): string {
        const room = this.rooms.get(roomNumber);

        if (!room) {
            return `Room ${roomNumber} does not exist.`
        }

        const roomBookings = this.bookings.get(roomNumber);
        if (!roomBookings?.has(bookedMonth)) {
            return `Room ${roomNumber} is not booked for ${bookedMonth}.`
        }

        roomBookings.delete(bookedMonth);
        this.totalBudget -= room.cancellationPrice;

        return `Booking cancelled for Room ${roomNumber} for ${bookedMonth}.`
    }

}

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