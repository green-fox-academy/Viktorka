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



}

let demSharpieSet: SharpieSet = new SharpieSet;
let greenSharpie: Sharpie = new Sharpie("green", 0.5)
let redSharpie: Sharpie = new Sharpie("red", 0.9)
let blueSharpie: Sharpie = new Sharpie("blue", 0.3)
demSharpieSet.addSharpies(redSharpie);
demSharpieSet.addSharpies(greenSharpie);
demSharpieSet.addSharpies(blueSharpie);
console.log(demSharpieSet.listOfSharpies[1].inkAmmount) //demsharpies.list... a lista eleme tehat a red/green/blue sharpie
