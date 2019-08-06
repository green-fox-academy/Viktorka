// Given a non-negative integer n, return the sum of its digits recursively (without loops).
'use strict';




function sumDigit(inPutNumber: number) {


    let remainder: number = inPutNumber % 10;
    let sum:number = remainder;
    if (inPutNumber >= 10) {
        let rest = Math.floor(inPutNumber / 10);
        sum += sumDigit(rest);
    }
    return sum;
}
console.log(sumDigit(4500000))