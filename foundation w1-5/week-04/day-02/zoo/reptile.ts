'use strict';
import Animal from './animals'

export default class Reptile extends Animal {
    coldblood: boolean;
    tail: boolean;

    constructor(name: string = "animal name", age: number = 0, gender: string = "random", blood?: boolean, taile?: boolean) {
        super(name, age, gender);
        this.coldblood = blood;
        this.tail = taile;
    }

    breed(): string {
        return `laying dem eggs`
    }


}