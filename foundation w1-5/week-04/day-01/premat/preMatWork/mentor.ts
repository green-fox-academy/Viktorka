'use strict';
import { Person } from './person';
import { Student } from './student';
import { Sponsor } from './sponsor';

class Mentor {

    name: string;
    age: number;
    gender: string;
    level: string;
    constructor()
    constructor(name= "Jane Doe", age= 30, gender= "famale", level= "intermediate") {
        super(name,age,gender)
        this.level = level;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender}`)
    }
    getGoal() {
        console.log("Educate them peeps!")
    }
    Mentor() {
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.level = "Intermediate";

    }








}









export { Mentor };