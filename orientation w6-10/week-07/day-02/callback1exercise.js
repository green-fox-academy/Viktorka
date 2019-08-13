
'use strict';

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (array, callback) => {
    let output=[];
    let splitted=[]
    let splittedArray = array.split(',')
    splitted.push(splittedArray.split(''))
    console.log(splitted)
}

// console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']

let array=[];
let array2=[];

for (let i=0; i<words.length;i++){
    
    array.push(words[i].split(''))
    for (let j=0;j<words[i].length;j++){
        if (j%2!==0){
           
        }
    }
}

console.log(array[1].join(''))
