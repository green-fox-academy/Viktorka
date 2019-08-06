export ={};
'use strict';
declare function require(path: string): any;
const fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

//let makeItWork = fs.readFileSync("log.txt", "utf-8");
function readLogFile(fileName: string): string {
    try {
        return fs.readFileSync("log.txt", "utf-8");
    } catch (e) {
        return '';
    }
}


let fileContent: string = readLogFile("log.txt"); // read log.txt
// console.log(fileContent);

function creatLinesBasedOnTextContent(fileContent: string): string[] {
    return fileContent.split('\n');
}
// console.log(creatLinesBasedOnTextContent(fileContent)); log.txt into string array split by end of line

function getIPAddressofLine(line: string): string { // split lines by index1 after 3 space ==> ip addresses 
    return line.split("   ")[1];
}

// creatLinesBasedOnTextContent(fileContent)  // lines getting split 
//  .forEach(function (line) {
//      console.log(getIPAddressofLine(line))
//  })
let IPAddresses: string[] = creatLinesBasedOnTextContent(fileContent)  // lines getting split 
    .map(function (line) {
        console.log(getIPAddressofLine(line))
    })
let uniqueIPAddresses: string[] = [];

})
