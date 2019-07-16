'use strict'

abstract class Instrument {
    abstract name: string;
    abstract play(): void;

}

abstract class StringedInstrument extends Instrument {
    abstract numberOfStrings: number;
    play(): void {
    }

    sound(): void {
        this.play()
    }


}

export { Instrument, StringedInstrument }