'use strict';

export default class Sumable {
    numbers: number[];

    constructor(num: number[]=[], ) {
        this.numbers = num
    }

    sum():number {
        this.numbers.reduce((a: number, b: number) => a + b)
       return a+b
    }



}

// listOfIntegers: number[];

// constructor(listOfIntegers: number[]){

//     this.listOfIntegers = listOfIntegers;
// }
// sum() {

//     this.listOfIntegers.reduce((a: number, b: number) => a + b)

// }


// }
let asd: Sumable = new Sumable()
let asda: Sumable = new Sumable([2,3,4])
console.log(asda.sum())
console.log(asd)