'use strict'

import Employee from "./employee";

// ##### Manager
// ​
// - It should have a `moodLevel` - in the beginning this is `400`
// - Whenever it is instructed to `work`:
//   - It should increase the `experience` by `1`
//   - It should invoke its `have a meeting` behaviour
// - Whenever `have a meeting` is invoked, the `moodLevel` should decrease by the managers `experience`

export default class Manager extends Employee {
    moodLevel: number;

    constructor(name, experience = 0) {
        super(name, experience);
        this.moodLevel = 400;
    }

    haveAmeeting() {
        this.moodLevel = this.moodLevel - this.experience;
    }

    work() {
        this.experience++;
        this.haveAmeeting();
    }

}