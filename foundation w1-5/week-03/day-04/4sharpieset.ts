// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies
'use strict';
import { Sharpie } from '../day-03/4sharpie'

class SharpieSet {
    listOfSharpies: Sharpie[] = [];


    addSharpies(add: Sharpie): void {
        this.listOfSharpies.push(add);
    }

    countUsable(): number {
        let counter: number = 0
        for (let i: number = 0; i < this.listOfSharpies.length; i++) {
            if (this.listOfSharpies[i].inkAmmount > 0) {
                counter++
            } else {

            }
        } return counter;
    }
    removeTrash() {
        for (let i: number = 0; i < this.listOfSharpies.length; i++) {
            if (this.listOfSharpies[i].inkAmmount === 0) {
                this.listOfSharpies.splice(i, 1);
            }
        }
    }
}

let demSharpieSet: SharpieSet = new SharpieSet;
let greenSharpie: Sharpie = new Sharpie("green", 0.5, 0)
let redSharpie: Sharpie = new Sharpie("red", 0.9, 8.9)
let blueSharpie: Sharpie = new Sharpie("blue", 0.3, 5)
demSharpieSet.addSharpies(redSharpie);
demSharpieSet.addSharpies(greenSharpie);
demSharpieSet.addSharpies(blueSharpie);
// console.log(demSharpieSet.listOfSharpies[1]) //demsharpies.list... a lista eleme tehat a red/green/blue sharpie
demSharpieSet.countUsable()
demSharpieSet.removeTrash();
console.log(demSharpieSet.listOfSharpies) 
