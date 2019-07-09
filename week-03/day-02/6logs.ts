export ={};
'use strict';
declare function require(path: string): any;
const fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let makeItWork = fs.readFileSync("log.txt", "utf-8");
let myArray = makeItWork.split(`\n`);
// let myNewArray: string[][] = []
let iPAdds: any = {}
let actualIpAdd: any;
let counterForUniqIP: number = 0;

myArray.forEach(function (line: string) {
    actualIpAdd = line.split("  ")[2]
    // console.log(actualIpAdd)
    if (iPAdds[actualIpAdd] == undefined) {
        iPAdds[actualIpAdd] = 1
    } else {
        iPAdds[actualIpAdd]++
    }
})
// objecten vegigmenni es arrayben emgszamolni az 1 ertekueket
// vagy uj array es array.length vagy valtozo 0rol indul es az erteke a vegen a megoldas
// if (iPAdds[actualIpAdd] == 1) {
if (iPAdds[actualIpAdd] === 1) {
    counterForUniqIP++;
}

console.log(counterForUniqIP)



