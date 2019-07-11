// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method
'use strict';
import { Student } from "./2students"
class Teacher {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    answer():string {
        return `${this.name} is answering da question`
    }

    teach(someOne: Student):void {
        console.log(someOne.learn())
    }

}

let Mark: Teacher = new Teacher("Mark");
let Viktorka: Student = new Student("Viktorka")

console.log(Mark.answer())
console.log(Viktorka.learn())
Viktorka.question(Mark)
Mark.teach(Viktorka)

export { Teacher };