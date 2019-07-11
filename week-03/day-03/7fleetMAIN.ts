import { Thing } from './7thing';
import { Fleet } from './7fleets';

let fleet: Fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

// ?? fleet will create [], thing will create "get milk" etc, print needs done

let milk: Thing = new Thing("Get milk");
let obstacles: Thing = new Thing("Remove the obstacles");
let standUp: Thing = new Thing("Stand up");
let eat: Thing = new Thing("Eat lunch");


standUp.complete();
eat.complete();



class FleetOfThings {
    private FleetOfThings: Fleet;

    constructor() {
        this.FleetOfThings = new Fleet;
    }

    main(thing: Thing): void {
        this.FleetOfThings.add(thing);
    }

    print() {
        let returnMsg: string='';
        let arrayOfThings: Thing[] = this.FleetOfThings.getThings();
        arrayOfThings.forEach(function (element) {
            returnMsg += arrayOfThings.indexOf(element) + 1 + ".";
            if (element.getCompleted()) {
                returnMsg += "[X]";
            } else {
                returnMsg += "[ ]";
            }
            returnMsg += element.getName();
        })
        return returnMsg;
    }


}
let newFleetOfThings:FleetOfThings = new FleetOfThings
newFleetOfThings.main(milk)
newFleetOfThings.main(obstacles)
newFleetOfThings.main(standUp)
newFleetOfThings.main(eat)
console.log(newFleetOfThings.print())