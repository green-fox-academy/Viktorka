export default class Apple {
    colour:string;

    constructor(colour?:string){
        this.colour=colour
    }

    getApple():string{
        return "banana"
    }

}

let asd: Apple = new Apple();

console.log(asd.getApple());