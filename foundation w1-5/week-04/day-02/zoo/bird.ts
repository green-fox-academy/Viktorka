'use strict';
import Animal from './animals'
import Flyable from '../flyable/flyable';

export default class Bird extends Animal  {
    wings: boolean;
    feathers: boolean;

    constructor(name: string = "animal name", age: number = 0, gender: string = "random", wing?: boolean, feather?: boolean) {
        super(name, age, gender);
        this.wings = wing;
        this.feathers = feather;
    }

    breed(): string {
        return `laying dem eggs`
    }

  

}
