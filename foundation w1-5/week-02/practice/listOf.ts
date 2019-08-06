'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];


export = {};


function checkNums(myArray:number[]): boolean{
    if (myArray.indexOf(4) && myArray.indexOf(8) && myArray.indexOf(12) && myArray.indexOf(16)){

    return true;
    } else {
    return false
    }
 
}

console.log(checkNums(listOfNumbers));