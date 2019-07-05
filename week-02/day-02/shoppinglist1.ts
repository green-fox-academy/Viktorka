'use strict'
//Do we have milk on the list?
//Do we have bananas on the list?

let myShoppingList: string[] = ["Eggs", "milk", "fish", "apples", "bread", "chicken"]


if (myShoppingList.indexOf("milk") > 0) {
    console.log("Yes, we do have milk on da list")
} else {
    console.log("asd")
}


if (myShoppingList.indexOf("bananas") > 0) {
    console.log(myShoppingList.indexOf("bananas"))
} else {
    console.log("No, we don't have bananas, do you want me to add it to the list?")
}

// if (myShoppingList.indexOf(item2) > 0) {
//     "No, we don't have bananas, do you want me to add it to the list?"
// } else {
//     "Yepp"
// }
// }
// demFunction(myShoppingList, "milk", "bananas")
