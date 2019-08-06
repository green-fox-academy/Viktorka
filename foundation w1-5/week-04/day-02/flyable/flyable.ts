'use strict';
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement yourˇFlyable interface



export default interface Flyable {
    land(): string;
    fly(): string;
    takeOff():string;
}

export default abstract class Vehicle {
    name:string;
    wheels:number;
    engine:string;


    constructor(name:string,wheels:number,engine:string){
        this.name=name;
        this.wheels=wheels;
        this.engine=engine;
    }
}




