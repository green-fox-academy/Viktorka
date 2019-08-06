'use strict'

import Person from './person'

export class Mentor extends Person {
    level: string;


    constructor(name?: string, age?: number, gender?: string, level = "intermediate") {
        super(name, age, gender)
        this.level = level;
    }
    introduce():void {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender} ${this.level} level mentor`)
    }

    getGoal() :void{
        console.log("Educate them peeps!")
    }
}

export default Mentor;