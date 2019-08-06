class Person {
    public name: string;
    public age: number;
    public gender: string;


    constructor(name = "Jane Doe", age = 30, gender = "famale") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce():void {
        console.log(`Hi, I'm ${this.name}, ${this.age} old ${this.gender}`)
    }

    getGoal() : void {
        console.log("Live for da moment")
    }
}


export default Person 