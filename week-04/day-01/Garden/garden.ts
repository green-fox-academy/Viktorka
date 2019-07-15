'use strict'
import Flower from './flower'
import Tree from './tree'
//import Plant from './plant'
class Garden {
    // flowers: Flower[];
    // trees: Tree[];
    plants: (Flower | Tree)[];

    constructor() {

        this.plants = [];
    }

    addPlant(plant: Flower | Tree): void {
        this.plants.push(plant)
    }

    status() {
        this.plants.forEach(function (element) {
            if (element.currentWater < 5 && element instanceof Flower || element.currentWater < 10 && element instanceof Tree) {
                console.log(`${element.name} needs water!`)
            } else {
                console.log(`${element.name} doesn't need water!`)
            }
        })

        // this.plants.forEach(function (element) {
        //     if (element.currentWater < 10 && element instanceof Tree) {
        //         console.log(`${element.name} needs water!`)
        //     } else {
        //         console.log(`${element.name} doesn't need water!`)
        //     }
        // })
    }

    Watering(number: number): void {
        console.log("Watering with" + number);
        theGarden.status();
        let counterOfPlantsThatNeedsWater: number = 0;
        for (let i: number = 0; i < this.plants.length; i++) {
            if (this.plants[i].currentWater < 5 && this.plants[i] instanceof Flower) {
                counterOfPlantsThatNeedsWater++;
            } else if (this.plants[i].currentWater < 10 && this.plants[i] instanceof Tree) {
                counterOfPlantsThatNeedsWater++;
            }

        }
        for (let i: number = 0; i < this.plants.length; i++) {
            if (this.plants[i].currentWater < 5 && this.plants[i] instanceof Flower) {
                this.plants[i].Watering((number / counterOfPlantsThatNeedsWater));
            } else if (this.plants[i].currentWater < 10 && this.plants[i] instanceof Tree) {
                this.plants[i].Watering((number / counterOfPlantsThatNeedsWater));
            }
        }
    }

    Watering2(number: number): void {
        console.log("Watering with " + number);
        theGarden.status();
        let counterOfPlantsThatNeedsWater: number = 0
        this.plants.forEach(function (element) {
            if (element.currentWater < 5 && element instanceof Flower || element.currentWater < 10 && element instanceof Tree) {
                counterOfPlantsThatNeedsWater++;
            }
        })
        this.plants.forEach(function (element) {
            if (element.currentWater < 5 && element instanceof Flower || element.currentWater < 10 && element instanceof Tree) {
                element.Watering(number / counterOfPlantsThatNeedsWater)
            }
        })
    }

}
const theGarden: Garden = new Garden
const blueflower: Flower = new Flower("blueFlower", 10)
const redflower: Flower = new Flower("redFlower", 3)
const bananatree: Tree = new Tree("bananaTree", 9)
const greentree: Tree = new Tree("greenTree", 15)


theGarden.addPlant(redflower)
theGarden.addPlant(blueflower)
theGarden.addPlant(bananatree)
theGarden.addPlant(greentree)
theGarden.status()
theGarden.Watering2(20)
theGarden.status()
// console.log(theGarden)








