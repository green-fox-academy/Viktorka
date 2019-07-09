export ={};
'use strict';
declare function require(path: string): any;
const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function doTheFunction(x:string){
try {
    fs.appendFileSync('my-files.txt', `\n${x}`, 'utf-8')
} catch (e){
    console.log("Unable to do so")
}
}

doTheFunction("Viktorka *")