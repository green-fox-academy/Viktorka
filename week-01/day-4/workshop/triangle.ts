'use strict';



// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let lineCount:number = 4;
let output:string='*';


for ( output; output.length <= lineCount ; output +='*' ) {
console.log(output);
 }

