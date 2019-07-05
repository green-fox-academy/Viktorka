'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(myArray: any[]): any[] {

    if (myArray.hasOwnProperty("Croissant") === false && myArray.hasOwnProperty("Ice Cream") === false) {

        myArray.splice(myArray.indexOf(2), 1, "Croissant");
        myArray.splice(myArray.indexOf(false), 1, "Ice Cream");
    }
    return myArray;

}
console.log(sweets(shopItems))
