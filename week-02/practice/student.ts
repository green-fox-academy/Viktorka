'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

// function allTheCandies(students: any) {

// }

let woot: number = 0;
let allCandies: number;

function allTheCandies() {
    let sumArray: number[] = [];

    for (let i: number = 0; i < students.length; i++) {


        sumArray.push(students[i].candies)

    }
    for (let i: number = 0; i < sumArray.length; i++) {
        woot = woot + sumArray[i]

    } console.log(woot)

}
allTheCandies()

function lessThanFive() {
    let sum: number = 0;
    let lessArray: number[] = [];
    let sumAgeArray: number[] = []
    for (let i: number = 0; i < students.length; i++) {


        sumAgeArray.push(students[i].candies)
        //console.log(sumAgeArray)

        if (sumAgeArray[i] < 5) {
            let a: number = sumAgeArray.indexOf(sumAgeArray[i], i)
            // console.log(a)
            lessArray.push(students[a].age)
            // console.log(lessArray)
        }
    }
    for (let index: number = 0; index < lessArray.length; index++) {
        sum = sum + lessArray[index]
    } console.log(sum)
}




lessThanFive()