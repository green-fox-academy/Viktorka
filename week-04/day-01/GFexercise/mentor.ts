'use strict'

import Person from './person'

export class Mentor extends Person {
    level: string;


    constructor(name = "Jane Doe", age = 30, gender = "famale", level = "intermediate") {
        super(name, age, gender)
        this.level = level;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender} ${this.level} level mentor`)
    }
    getGoal() {
        console.log("Educate them peeps!")
    }
}

export default Mentor;