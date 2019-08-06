/*Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A */
'use strict'

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: string[] = listA.slice()
console.log(listB)
if (listA.indexOf("Durian") == -1) { // Print out whether List A contains Durian or not
    console.log("Doesn't contain Durian")
} else {
    console.log("Contiains Durian")
}
listB.splice(3,1)
// console.log(listB) Remove Durian from List B 
listA.splice(4, 0, "Kiwifruit"); //Add Kiwifruit to List A after the 4th element
console.log(listA);
if (listA.length > listB.length) {
    console.log("listA is bigger"); //Compare the size of List A and List B
} else {
    console.log("listB is bigger")
}
console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));

listB.unshift("Passion Fruit","Pomelo") // or .splice(wherefrom,howmanytodeletesay0, PF,POM)
console.log(listA[2]);