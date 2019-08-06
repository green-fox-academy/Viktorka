'use strict';

export default class Sumable {
    numbersArray: number[];

    constructor(num?: number[], ) {
        this.numbersArray = num
    }

    sum(): number {
        let sum: number = 0;
        if (this.numbersArray == [] || this.numbersArray == undefined) {
            return undefined
        }
        for (let i = 0; i < this.numbersArray.length; i++) {
            sum = sum + this.numbersArray[i]
        } return sum

    }

}

let asd: Sumable = new Sumable()
let asda: Sumable = new Sumable([2, 3, 4, 5])
console.log(asda)
console.log(asda.sum())
console.log(asda)
console.log(asd.sum())