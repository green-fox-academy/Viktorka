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

class Violin extends StringedInstrument {
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



console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();