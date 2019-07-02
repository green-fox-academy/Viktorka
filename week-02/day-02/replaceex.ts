'use strict';
let toReplace = /dishwasher/gi;
let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let newStr = example.replace(toReplace, "galaxy" )

example=newStr;

console.log(example);

export = example;

