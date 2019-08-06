'use strict'
import F16 from './f16'
import F35 from './f35'
import Plane from './plane';

class AircraftCarrier {
    HP: number;
    initialAmmo: number;
    planes: (F35 | F16)[]

    constructor(HP: number, intialAmmo: number) {
        this.HP = HP;
        this.initialAmmo = intialAmmo;
        this.planes = []
    }

    add(plane: F16 | F35) {
        this.planes.push(plane);
    }

    fill() {
        let ammoSubstract: number;
        this.planes.forEach(function (element) {
            element.refill(element.maxAmmo);
            ammoSubstract = element.maxAmmo;
        })
    }

}


let abc : F35= new F35("F35",12,0,50);
console.log(abc)
let cde : F16=new F16("F16",8,0,30)
abc.refill(15)

let nimitz : AircraftCarrier = new AircraftCarrier(5000,5000)
nimitz.add(abc)
nimitz.add(cde)
console.log(nimitz)
abc.fight()
nimitz.fill()
console.log(nimitz)
