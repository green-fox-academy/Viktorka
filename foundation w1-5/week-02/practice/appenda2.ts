'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
//let x:string = far;
function appendA(myArray: string[]):string[] {
    for(let i: number = 0; i <myArray.length; i++) {
    myArray[i] = myArray[i].concat("a");
}
    return myArray;
}




console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

export = {};

