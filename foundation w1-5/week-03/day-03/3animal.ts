// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    type:string;
    hunger: number;
    thirst: number;


    constructor(type:string) {
        this.type=type;
        this.hunger = 50;
        this.thirst = 50;
    }

    eat(): number {
       return this.hunger--;
    }
    drink(): void {
        this.thirst--;
    }
    play(): void {
        this.hunger++;
        this.thirst++;
    }
}
let Roka: Animal = new Animal ("roka")
let Panda: Animal = new Animal("panda");
console.log(Panda)
Roka.drink()
Roka.drink()
Roka.drink()
Roka.play()
Roka.play()
Roka.play()
Roka.eat()
Roka.eat()
Roka.eat()
Roka.eat()
Panda.drink()
Panda.drink()
console.log(Roka)
Panda.play()
Panda.play()
Panda.play()
Panda.play()
Panda.play()
Panda.eat()
Panda.eat()
Panda.eat()
console.log(Panda)