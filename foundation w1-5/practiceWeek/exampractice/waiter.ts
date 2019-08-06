'use strict';
// ##### Waiter 
// ​
// - It should store the amount of `tips` it has - in the beginning this is `0`
// - Whenever it is instructed to `work`:
//   - It should increase the amount of `tips` by `1`
//   - It should increase its `experience` by `1`

import Employee from './employee'

export default class Waiter extends Employee {
    tips: number = 0;

    constructor(name: string, experience: number = 0) {
        super(name, experience);

    }

    work() {
        this.tips++;
        this.experience++;
    }

}



