// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

'use strict';
interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}
let dOw: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let characters: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charactersLength = characters.length;
let codeLength = 8;


class Reservation implements Reservationy {
    dow: string;
    code: string;

    constructor() {
        let daCode: string = '';
        for (let i: number = 0; i < codeLength; i++) {
            daCode += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        this.code = daCode;
        this.dow = dOw[Math.floor(Math.random() * 7)]
    }



    getDowBooking(): string {
        return this.dow;
    }
    getCodeBooking(): string {
        return this.code;
    }
}

let reserve: Reservation = new Reservation();

console.log(`Booking# ${reserve.getCodeBooking()} for ${reserve.getDowBooking()}`)
console.log(`Booking# ${reserve.getCodeBooking()} for ${reserve.getDowBooking()}`)
console.log(`Booking# ${reserve.getCodeBooking()} for ${reserve.getDowBooking()}`)