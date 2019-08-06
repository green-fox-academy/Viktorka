

//function guessMe(range:number,myGuess:number){

// let theNumber: number = Math.floor(Math.random() * (range+1))

// if (myGuess < theNumber){
//     console.log("Your guess is smaller than the number")
// } else if (myGuess > theNumber){
//     console.log("Your guess is bigger than the number")
// } else if (myGuess = theNumber){
//     console.log("That is the number!!!")
// }
// console.log(theNumber)


function guessMe(x:number,y:number,z:number){
let guessed:number = Math.floor(Math.random()*x+1);
let turn:number = y,
while (turn> 0 ) {
    if (z==guessed) {
        console.log("Yaay");
        turn=0;
    } else 
}



}




}
guessMe(5,2)