    
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

declare function require(path : string) : any;
const fs = require('fs');
fs.writeFileSync('my-file.txt', 'asd ddd \n dda\n asd')


try {
    let readMe=fs.readFileSync('my-files.txt', 'utf-8');
console.log(readMe)
} catch (e) {
    console.log("Unable to read file:my-file.txt");
}