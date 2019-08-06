// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount
'use strict';

class Sharpie {
    colour: string;
    width: number;
    inkAmmount: number;


    constructor(colour: string, width: number, inkAmmount=10) {
        this.colour = colour;
        this.width = width;
        this.inkAmmount = inkAmmount;
    }

    use(): void {
        if (this.width >= 0.8) {
            this.inkAmmount = this.inkAmmount - 0.8;
        } else if (this.width >= 0.6) {
            this.inkAmmount = this.inkAmmount - 0.6;
        } else if (this.width >= 0.4) {
            this.inkAmmount = this.inkAmmount - 0.4;
        } else if (this.width >= 0.2) {
            this.inkAmmount = this.inkAmmount - 0.2;
        }
    }


}
let greenSharpie: Sharpie = new Sharpie("green", 0.5)
let redSharpie: Sharpie = new Sharpie("red", 0.9)
let blueSharpie: Sharpie = new Sharpie("blue", 0.3)
// console.log(greenSharpie);
// console.log(redSharpie);
// console.log(blueSharpie);
// greenSharpie.use();
// redSharpie.use();
// redSharpie.use();
// blueSharpie.use();

// console.log(greenSharpie);
// console.log(redSharpie);
// console.log(blueSharpie);

export { Sharpie };