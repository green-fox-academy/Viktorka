import Person from './person'

export class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company = "Google", hiredStudents = 0) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents
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


}

export default Sponsor;