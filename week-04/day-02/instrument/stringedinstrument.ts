'use strict'

import { Instrument, StringedInstrument } from './instrument'

class ElectricGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;


    constructor(numberOfStrings = 6, name = "Electric guitar") {
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;

    }

    sound(): string {
        return `Twang`
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
    }

}
class BassGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;


    constructor(numberOfStrings = 4, name = "Bass guitar") {
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;

    }

    sound(): string {
        return `Duum-duum-duuuum`
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
    }


}

class Violoin extends StringedInstrument {
    name: string;
    numberOfStrings: number;


    constructor(numberOfStrings = 4, name = "Violin") {
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;

    }

    sound(): string {
        return `Screech`
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
    }

}

let electricguitar: ElectricGuitar = new ElectricGuitar()
let bassguitar: BassGuitar = new BassGuitar()
let daViolin: Violoin = new Violoin()


electricguitar.play()
bassguitar.play()
daViolin.play()