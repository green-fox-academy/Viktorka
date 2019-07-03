'use strict'
/*How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?*/


let myProducts:any = {
    "Eggs":200,
    "Milk":200,
    "Fish":400,
    "Apples":150,
    "Bread":50,
    "Chicken":550
}

console.log("The fish costs "+myProducts["Fish"]+ " money");
let mostExpensiveItem:number=Math.max(...myProducts);
console.log("The most expensive item is "+mostExpensiveItem)