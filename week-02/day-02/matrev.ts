'use strict'
/*
let list: number[] = [1, 3, 5, 1, 4, 5];
let listWithCubes: number[] = list.map(function (element) {
    return element ** 3;
})
console.log(listWithCubes);

function cubeNumbers(numbers: number [] = [] ){
    let listOfCubes: number[] = numbers.map(function (element) {
        return element ** 3
    })
    return listOfCubes
}

console.log(cubeNumbers(list)); */

// STRINGS

export = {}; // wont show up reused variable names as error 

/* let single: string = 'single quotes'
let double:string= "double quotes"
let backTick:string='Today is ${(100 ** 2)-1}'; //doesnt work!!!!!!!!!!!

console.log(single, double, backTick)

console.log(single.length);

console.log(single.toUpperCase().toLowerCase); */

// toUpperCase ("appletree", 3) -> "appLetree"

function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index)
    let replaceUpperCase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index + 1)
    return prefix.concat(replaceUpperCase).concat(suffix)
}

console.log(toUpperCaseAtIndex("appletree", 5));

let greetings: string = "Hello create class"

let lettersOfWorld: string[] = toUpperCaseAtIndex("appletree", 0).split(' ');
console.log(lettersOfWorld)

let lettersOfWorld2: string = greetings.replace('create', 'Create');
console.log(greetings, ' - ', lettersOfWorld2)

let greetings2: string = "Hello create class create"

let lettersOfWorld3: string = greetings2.replace(/create/g, 'Create');
console.log(greetings2, ' - ', lettersOfWorld3)

let textToSlice: string = "1234567890";
let sliced: string = textToSlice.slice(4, -3); // -3 -> last 3 character(counting from the end)

console.log(sliced);

