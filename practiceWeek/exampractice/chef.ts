'use strict'

// ##### Chef
// ​
// - It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)
// - Whenever it is instructed to `work`:
//   - It should increase its `experience` by `1`
// - It should have a `cook` behavior
//   - This should get the `name of the food` as an input
//   - This should update the `meals` information so we are able to track that it cooked this specific food again

import Employee from './employee'

export default class Chef extends Employee {
    meals: object= {};

    constructor(name: string, experience: number = 0) {
        super(name, experience);

    }

    work() {
        this.experience++;
    }

    cook(nameOfTheFood: string) {
        if (nameOfTheFood in this.meals === true) {
            this.meals[nameOfTheFood]++;
        } else {
            this.meals[nameOfTheFood] = 1;
        }
    }

}