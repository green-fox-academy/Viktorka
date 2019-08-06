'use strict'

import Pirate from './pirate'

export default class Ship {
    pirates: Pirate[];

    constructor() {
        this.pirates = []
    }

    checkCapitain(): boolean {
        let hascaptian: boolean = false;
        this.pirates.forEach(function (crewMemeber) {
            crewMemeber.isCaptain === true;
            hascaptian = true;
        }); return hascaptian
    }

    addPirate(name: Pirate): void {
        if (name.isCaptain === false) {
            this.pirates.push(name)
        } else if (name.isCaptain === true && this.checkCapitain() === true) {

        } else if (name.isCaptain === true && this.checkCapitain() !== true) {
            this.pirates.push(name)
        }
    }
}


// let ship: Ship = new Ship();
// let jack3: Pirate = new Pirate("Jack3", true, true);
// let jack4: Pirate = new Pirate("Jack4", true, true);
// let jack5: Pirate = new Pirate("Jack5", false, true);
// // ship.addPirate(jack3)
// ship.addPirate(jack4)
// ship.addPirate(jack5)
// console.log(ship)