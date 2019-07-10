// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class Postit {
    background: string;
    text: string;
    textColour: string;

    constructor(background: string, text: string, textColour: string) {
        this.background = background;
        this.text = text;
        this.textColour = textColour;
    }
}
let myFirstPostIt: Postit = new Postit("orange", "Idea1", "blue");
let mySecondPostIt: Postit = new Postit("pink", "Awesome", "black");
let myThirdPostIt: Postit = new Postit("yellow", "Superb!", "green");

console.log(myFirstPostIt,mySecondPostIt,myThirdPostIt)