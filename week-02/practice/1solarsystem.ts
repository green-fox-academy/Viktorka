'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods


// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"


// export = putSaturn;

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
function univerze(myArray: string[]): string[] {
    for (let i: number = 0; i < myArray.length; i++) {
        myArray = myArray.splice(5,0,"Saturn");

    }
    return planetList;
}
console.log(univerze(planetList))



// function filterNamesLongerThanFive(names: string[]): string[] {
//     let filteredNames: string[] = [];
//     for (let index: number = 0; index < names.length; index++) {
//         if (names[index].replace(" ", "").length > 5) {
//             filteredNames.push(names[index]);
//         }
//     }
//     return filteredNames;
// }



