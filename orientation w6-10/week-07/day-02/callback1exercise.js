
'use strict';

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }
    return output;
};

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];


const removeSecondLetter = (arrayElement) => {
    let splittedWords = [];
    for (let i = 0; i < arrayElement.length; i++) {
        if (i % 2 == 0) {
            splittedWords.push(arrayElement[i])
           
        }
    }
    return splittedWords.join('')
}
console.log(mapWith(words, removeSecondLetter));




const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(isPrime(13))