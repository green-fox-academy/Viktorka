'use strict';
import GreenFoxStudent from './matrevGFstudent'

class GreenFoxClass {
    classMembers: GreenFoxStudent[];

    constructor() {
        this.classMembers = [];
    }

    registerStudents(student: GreenFoxStudent) {
        this.classMembers.push(student);
    }
}

const create: GreenFoxClass = new GreenFoxClass;
const szabolcs: GreenFoxStudent = new GreenFoxStudent("Szabolcs", 36, 186, "szszed");
const agi: GreenFoxStudent = new GreenFoxStudent("Agi", 80, 170, "volunteer")


console.log(create);
create.registerStudents(szabolcs);
create.registerStudents(agi);
create.registerStudents(new GreenFoxStudent("Zsolt", 28,184,"kbzsbrw"))
console.log(create.classMembers);

export default GreenFoxClass