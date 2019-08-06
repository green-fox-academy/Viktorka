'use strict';
import Person from './matrev'
class GreenFoxStudent extends Person {
    gitHubUsername: string;
    frustrationLevel: number = 100;

    constructor(name: string, age: number, height: number, gitHubUsername: string) {
        super(name, age, height)
        this.gitHubUsername = gitHubUsername;

    }
    socialise() {
        console.log(`I don't even know the name of my friends anymore, all I do is go to Helvecia every Friday`)
    }




}
// const averageJoe = new Person('Joe', 25, 180)
// averageJoe.askMeHowIAm()
// console.log("This is Joe")
// averageJoe.socialise()

// const sandor: GreenFoxStudent = new GreenFoxStudent("Sanyi", 25, 185, "eksandor");
// sandor.socialise()

export default GreenFoxStudent