// ### Restaurant
// ​
// Your task is to create a program to model the every day life in a restaurant.
// ​
// ​
// #### Employee
// ​
// - Every employee has a `name`, an `experience` (number) and a method `work`
// - The `experience` should start from `0` by default if it is not provided
// - Every employee should be able to `work`, however the specific behavior is different for every kind
// ​
// **We cannot hire or create basic employee** because they should always be some kind of specific employee like `Chef`, `Manager` or `Waiter`.
// ​
// ##### Waiter 
// ​
// - It should store the amount of `tips` it has - in the beginning this is `0`
// - Whenever it is instructed to `work`:
//   - It should increase the amount of `tips` by `1`
//   - It should increase its `experience` by `1`
// ​
// ##### Chef
// ​
// - It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)
// - Whenever it is instructed to `work`:
//   - It should increase its `experience` by `1`
// - It should have a `cook` behavior
//   - This should get the `name of the food` as an input
//   - This should update the `meals` information so we are able to track that it cooked this specific food again
// ​
// ##### Manager
// ​
// - It should have a `moodLevel` - in the beginning this is `400`
// - Whenever it is instructed to `work`:
//   - It should increase the `experience` by `1`
//   - It should invoke its `have a meeting` behaviour
// - Whenever `have a meeting` is invoked, the `moodLevel` should decrease by the managers `experience`
// #### Restaurant
// ​
// - Every restaurant has a `name`, the year it was `founded` and a list of `employees` who are working there.
// - It should have a method `guests arrived` which should instruct all employees to `work`
// - We should be able to `hire` an employee which will add it to the list of `employees`


'use strict';

import Manager from "./manager";
import Waiter from "./waiter";
import Chef from "./chef";


export default class Restaurant {
    name: string;
    founded: number;
    employees: (Chef | Waiter | Manager)[];

    constructor(name: string, founded: number) {
        this.name = name;
        this.founded = founded;
        this.employees = [];
    }

    guestsArrived() {
        for (let i: number = 0; i < this.employees.length; i++) {
            this.employees[i].work();
        }
    }
    hire(employeeToHire: Chef | Waiter | Manager) {
        this.employees.push(employeeToHire);
    }

}

let waiter1: Waiter = new Waiter("W1");
let waiter2: Waiter = new Waiter("W2");
let waiter3: Waiter = new Waiter("W3");
let chef1: Chef = new Chef("C1");
let chef2: Chef = new Chef("C2");
let manager: Manager = new Manager("M");
let restaurant: Restaurant = new Restaurant("R1", 2000);

restaurant.hire(waiter1);
restaurant.hire(waiter2);
restaurant.hire(waiter3);
restaurant.hire(chef1);
restaurant.hire(chef2);
restaurant.hire(manager);

console.log(restaurant)
restaurant.guestsArrived()
restaurant.guestsArrived()
restaurant.guestsArrived()
console.log(chef1)
chef1.cook("burger")
chef1.cook("burger")
chef1.cook("fries")
console.log(chef1)


console.log(restaurant)