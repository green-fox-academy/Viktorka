'use strict';

abstract class Animal {
     name: string;
     age: number;
     gender: string;
     
     

    constructor(name: string = "animal name", age: number = 0, gender:string="random"){
        this.name=name;
        this.age=age;
        this.gender=gender;
        
    }

    getName(): string {
        return this.name;
    }

    abstract breed(): string;


}



export default Animal;