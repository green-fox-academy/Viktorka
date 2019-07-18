'use strict';

export default class Sumable {
    numbers: number[];

    constructor(num?: number[]) {
        this.numbers = num
    }

    sum(): number {
        let sum: number = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            sum = sum + list[i]
        } return sum

    }

}