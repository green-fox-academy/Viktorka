'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];



function makingMatches(myArray1: string[], myArray2: string[]): string[] {
    for (let i: number = 0; i < myArray2.length; i++) {
        console.log(myArray1[i],myArray2[i])

    }
    return makingMatches(myArray1,myArray2)
}



console.log(makingMatches(girls, boys));

export = {};