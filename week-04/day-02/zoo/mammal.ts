'use strict';
import Animal from './animals'

export default class Mammal extends Animal {
    furry: boolean;
    legs: number;

    constructor(name: string = "animal name", age: number = 0, gender: string = "random", fury?: boolean, thisLegs?: number) {
        super(name, age, gender)
        this.furry = fury;
        this.legs = thisLegs;

    }

    breed(): string {
        return "pushing out small ones"
    }

}