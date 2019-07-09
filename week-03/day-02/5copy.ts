export ={};
'use strict';
declare function require(path: string): any;
const fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyCat(copyTo: string, copyFrom: string): boolean {
    try {
        let content: string = fs.readFileSync(copyFrom, 'utf-8')
        fs.writeFileSync(copyTo , content)
        return true;
    } catch {
        return false
    }
}
copyCat("myfiles2.txt","my-file.txt")