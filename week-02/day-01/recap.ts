'use strict';

let myName: string = "Viktor";
let yourName: string = "Viktor";
let hisName: string = "Viktor";

let cutePuppy: string[] = ["Morzsi", "Liza", "Furkesz", "Riley"];

for (let i:number=0; i<4; i++){

    console.log(cutePuppy[i]);
}

cutePuppy.forEach
    (function (puppy) {
        console.log(puppy);
    })

