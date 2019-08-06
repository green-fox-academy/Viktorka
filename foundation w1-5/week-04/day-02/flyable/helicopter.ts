'use strict';

import Vehicle from './flyable'
import Flyable from './flyable';

class Helicopter extends Vehicle implements Flyable {
    flySpeed: number;
    constructor(name:string, wheels: number, engine: string, flySpeed: number) {
        super(name, wheels, engine)
        this.flySpeed = flySpeed;
    }

    land():string{
        return `${this.name} is landing...`
    }

    fly():string{
        return `${this.name} is flying...`
    }

    takeOff():string{
        return `${this.name} is taking off...`
    }
}


