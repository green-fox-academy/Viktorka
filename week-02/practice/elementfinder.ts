
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5,7, 6, 8];

function containsSeven(myArray: number[]):number[] {
    if (myArray.hasOwnProperty(7) !== true) {
        console.log("Noooooo");

    } else {
        console.log("Hoorray")
    }
    return myArray
}
containsSeven(numbers);



// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = {}