'use strict'

import Person from './person'

export class Student extends Person {
    previousOrganisation: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganisation = "School of Life", skippedDays = 0) {
        super(name, age, gender);
        this.previousOrganisation = previousOrganisation;
        this.skippedDays = skippedDays;
    }
    introduce() :void {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender} from ${this.previousOrganisation} with ${this.skippedDays} :)`)
    }
    
    getGoal() :void{
        console.log("Be a junior software developer")
    }

    skipDays(number: number):void {
        this.skippedDays = number + this.skippedDays;
    }
}

export default Student;