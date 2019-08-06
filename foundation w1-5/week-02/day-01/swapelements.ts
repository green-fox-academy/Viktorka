'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string [] = ["Arthur", "Boe", "Chloe"];
let addToTheEnd=abc.push(abc[0])
let removeFromFront=abc.shift();
let addToFront=abc.unshift(abc[1]);
let removeIndexThree=abc.splice(2,1,);



console.log(abc);