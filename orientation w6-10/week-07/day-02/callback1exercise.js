
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

// const removeSecondLetter = (array) => {
//     let splittedChar = [];
//     for (let i = 0; i < array.length; i++) {
//         let array2 = [];
//         for (let j = 0; j < array[i].length; j++) {
//             if (j % 2 === 0) {
//                 array2.push(array[i][j])
//             }
//         }
//         splittedChar.push(array2.join(''))

//     }
// }

const removeSecondLetter = (arrayElement) => {
    let splittedWords = [];
    for (let i = 0; i < arrayElement.length; i++) {
        if (i % 2 == 0) {
            splittedWords.push(arrayElement[i])
            splittedWords.join('');
        }
    }
    return splittedWords.join('')
}
console.log(mapWith(words, removeSecondLetter));



