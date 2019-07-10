'use strict'

export default class Cookie {
    shape: string;   //error! property has no initializer and most definitaly not assigned to in the constructor msg. 
    hasSparkles: boolean;
    id: number;
    private status: string = 'raw';
    static isYammie: boolean = true;
    flavour: string;
    static lastId: number = 1;

    bakeMe():void {
        this.status = "baked to perfection"
    }

    checkMyStatus():void {
        return this.status;
    }

    //static method ==> property for the whole class, true for all all units in the class
    static howAreYouToday(mood: string):string {
        return `I am doing ${mood}`;
    }


    constructor(shape: string , hasSparkles: boolean, flavour: string) {
        this.shape = shape;
        this.hasSparkles = hasSparkles;
        this.flavour = flavour;
        this.id = Cookie.lastId;
        Cookie.lastId++;
    }


}

let myFirstCookie: Cookie = new Cookie("elephant", false, "vanila");
// console.log(myFirstCookie.checkMyStatus) // new method to check private status
console.log(myFirstCookie)
myFirstCookie.bakeMe()
console.log(myFirstCookie)
let mySecondCookie: Cookie = new Cookie("spider", true, "strawberry")
//console.log(mySecondCookie)
mySecondCookie.bakeMe();
console.log(mySecondCookie)
// myFirstCookie.howAreYouToday("good") == error
console.log(Cookie.howAreYouToday('amazing')); // works