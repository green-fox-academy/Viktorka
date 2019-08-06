'use strict';
import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';



class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;


    constructor()
    constructor(name?: "Jane Doe", age?: 30, gender?: "famale", company?: "intermediate", hiredStudents?: 0) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.hiredStudents = hiredStudents;
    }




    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
    }

    hire() {
        this.hiredStudents++
    }

    getGoal() {
        console.log("Hire brilliant junior software developers!")
    }

    Sponsor() {
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.company = "Google";
        this.hiredStudents = 0;
    }
}

















export { Sponsor };