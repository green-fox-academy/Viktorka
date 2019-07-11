'use strict';
import { Teacher } from "./2teacher"

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    learn(): string {
        return `${this.name} is learning something new`
    }

    question(someOne: Teacher): void {
       console.log(someOne.answer())
    }

}


export { Student }