// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100
'use strict';
import { Car } from "./car";


class Station {
    gasAmount: number;

constructor(gasAmmount=500){
    this.gasAmount=gasAmmount
}
    refill(stuff: Car): void {
        this.gasAmount= this.gasAmount-stuff.capacity+stuff.gasAmmount;
        stuff.gasAmmount= stuff.gasAmmount+(100-stuff.gasAmmount);
        
    }



}
let oemfau:Station = new Station()
let bombi:Car= new Car(50,150);
let merdzso:Car= new Car(0,100);
console.log(oemfau);
console.log(bombi);
console.log(merdzso);
oemfau.refill(bombi);
oemfau.refill(merdzso);
oemfau.refill(merdzso);
oemfau.refill(merdzso);
console.log(oemfau);
console.log(bombi);
console.log(merdzso);