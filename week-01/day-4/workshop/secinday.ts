let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let leftOverHours:number = 23 - currentHours
let leftOverMinutes: number = 60 - currentMinutes;
let leftOverSeconds: number = 60 - currentSeconds;

leftOverHours*60*60+leftOverMinutes*60+leftOverSeconds

console.log(leftOverHours*60*60+leftOverMinutes*60+leftOverSeconds);