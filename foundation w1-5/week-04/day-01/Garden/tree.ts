'use strict'
import Plant from './plant'
class Tree extends Plant {


    constructor(name: string, currentWater: number) {
        super(name, currentWater)
    }

    Watering(number: number) :void {
        this.currentWater = this.currentWater + (number * 0.4)
    }


}
export default Tree
















