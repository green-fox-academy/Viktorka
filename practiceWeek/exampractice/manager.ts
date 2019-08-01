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

    constructor(name, experience = 0, moodLevel:number = 400) {
        super(name, experience);
        this.moodLevel = moodLevel;
    }

    haveAmeeting() {
        this.moodLevel = this.moodLevel - this.experience;
    }

    work() {
        this.experience++;
        this.haveAmeeting();
        if (this.moodLevel <= -1) {
            this.tantrum()
        }
    }
    workMore() {
        let theNumberOfDays: number = this.howManyDays();
        for (let i: number = 0; i < theNumberOfDays; i++) {
            this.work();

        }
    }

    howManyDays(): number {
        let days: number = this.experience;
        let theMoodLevel = this.moodLevel;
        for (; days <= theMoodLevel; days++) {
            theMoodLevel = theMoodLevel - days;              
        } return days;

    }
    tantrum() {
        console.log("FUCK THIS SHIT I'M OFF")
    }
}