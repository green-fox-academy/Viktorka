'use strict'

let myMap = new Map();
if (myMap.size < 1) {
    console.log("empty");
} else {
    console.log("not empty");
}

// console.log(myMap.size)
myMap.set(97, "a");    //Add the following key-value pairs to the map
myMap.set(98, "b");
myMap.set(99, "c");
myMap.set(65, "A");
myMap.set(66, "B");
myMap.set(67, "C");

console.log(myMap.keys()); //Print all the keys
console.log(myMap.values()); //Print all the values

myMap.set(68, "D"); // add value D to key 68 console.log(myMap);

console.log(myMap.size); // Print how many key-value pairs are in the map

console.log(myMap.get(99)); // Print the value that is associated with key 99

myMap.delete(97); // Remove the key-value pair where with key 97
// console.log(myMap);

if (myMap.has(100) == true) {   // Print whether there is an associated value with key 100 or not
    console.log("Yes there is");
} else {
    console.log("Nope")
}

/*let myMap2 = new Map (); Remove all the key-value pairs
myMap = myMap2;
myMap2 = myMap;
console.log(myMap) */
myMap.clear(); // Remove all the key-value pairs in short
console.log(myMap);