'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
quote = quote.replace("you", "always takes longer than you");
// let quote2:string =quote.replace("you","always takes longer than you");

//console.log(quote2)

//quote=quote2;
console.log(quote);



/*let splitMee:string []= quote.split("you");
let alwaysTakeLongerThan = splitMee.concat("always takes longer than");
let imDone = alwaysTakeLongerThan.join("you");

imDone=quote; */



