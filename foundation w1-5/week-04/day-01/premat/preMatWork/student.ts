'use strict';
import { Person } from './person';
import { Sponsor } from './sponsor';
import { Mentor } from './mentor';

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganisation: string;
    skippedDays: number;
    constructor()
    constructor(name?: "Jane Doe", age?: 30, gender?: "famale", previousOrganisation?: "School of Lyfe", skippedDays?: 0) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.previousOrganisation = previousOrganisation;
        this.skippedDays = skippedDays;


    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender} from ${this.previousOrganisation} with ${this.skippedDays} :)`)
    }
    getGoal() {
        console.log("Be a junior software developer")
    }
    skipDays(number: number) {
        this.skippedDays = number + this.skippedDays;
    }
    Student() {
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.previousOrganisation = "School of Lyfe";

    }

}

export { Student }