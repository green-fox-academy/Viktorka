'use strict'
import Plant from './plant'
class Flower extends Plant{

constructor(name:string,currentWater:number){
    super(name,currentWater);
}

Watering(number:number){
    this.currentWater= this.currentWater+(number*0.75);
}



}

export default Flower