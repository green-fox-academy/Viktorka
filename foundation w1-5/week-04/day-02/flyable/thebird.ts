'use strict'

import Bird from "../zoo/bird";
import Flyable from "./flyable";

class Birdie implements Flyable {
    name: string;
    wheels: number;
    engine: string;


    constructor(name: string, wheels: number, engine: string) {
        this.name = name;
        this.wheels = wheels;
        this.engine = engine;

    }
    land(): string {
        return `${this.name} is landing...`
    }

    fly(): string {
        return `${this.name} is flying...`
    }

    takeOff(): string {
        return `${this.name} is taking off...`

    }
}

let madar: Birdie = new Birdie()

console.log(madar.land())