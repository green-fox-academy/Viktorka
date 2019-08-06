'use strict'
/*Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings?*/
export ={}

let myFinance: number[] = [500, 1000, 1250, 175, 800, 120, 250, 2000];


let howMuchSpent: number = 0;

for (let i: number = 0; i < myFinance.length; i++){
     howMuchSpent=howMuchSpent+myFinance[i]
}
console.log("We spent "+howMuchSpent+" money" );


/*function getMaxOfArray(myFinance) {
    return Math.max.apply(null, myFinance)
} */

let biggestExpense:number = Math.max(...myFinance);        //max spent
console.log("The biggest expense was "+biggestExpense);

let smallestExpense:number = Math.min(...myFinance)    //min spent
console.log("The cheapest spending costed us "+smallestExpense);

console.log("The average purchase was "+howMuchSpent/myFinance.length+ " money");