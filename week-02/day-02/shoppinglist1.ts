'use strict'
//Do we have milk on the list?
//Do we have bananas on the list?

let myShoppingList:string [] = ["Eggs", "milk", "fish", "apples", "bread","chicken"]

if (myShoppingList.hasOwnProperty("milk")==true) {
    console.log("Yes, we do")
}

if (myShoppingList.hasOwnProperty("bananas")!==true) {
    console.log("No, we don't")
}
