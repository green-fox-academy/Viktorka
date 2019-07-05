'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

// Expected output: "What I cannot create I do not understand."

export = {};


function quoteSwap(myArray: string[],index1:number,index2:number): string[] {
    let temp:string= myArray[index1];
    myArray[index1]=myArray[index2];
    myArray[index2]=temp;
 return myArray
}






console.log(quoteSwap(words,2,5))