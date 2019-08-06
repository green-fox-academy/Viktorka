'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

console.log(quote);

let splitedQuote: string[] = quote.split("you");

let newSQ: string[] =[]
newSQ.push(splitedQuote[0])
newSQ.splice(0,1,"Hofstadter's Law: It always")

let asd:string =newSQ.join()+splitedQuote.join()
console.log(asd)
// let newSQ:string []=splitedQuote.concat("always")
// console.log(newSQ);