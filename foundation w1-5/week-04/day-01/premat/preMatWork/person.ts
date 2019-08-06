'use strict';
import { Sponsor } from './sponsor';
import { Student } from './student';
import { Mentor } from './mentor';

class Person {
    public name: string;
    public age: number;
    public gender: string;

    constructor()
    constructor(name?: string, age?: 30, gender?: "famale") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender}`)
    }
    getGoal() {
        console.log("Live for da moment")
    }
}

export { Person }

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);