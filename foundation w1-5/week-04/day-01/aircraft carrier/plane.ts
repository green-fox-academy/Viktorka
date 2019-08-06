'use strict'

export class Plane {
    type: string;
    maxAmmo: number;
    ammo: number;
    baseDamage: number;

    constructor(type: string, maxAmmo: number, ammo: 0, baseDamage: number) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.ammo = ammo;
        this.baseDamage = baseDamage;
    }

    fight() {
        let totalDamage: number = 0
        totalDamage = this.maxAmmo * this.baseDamage;
        this.ammo = 0;
        console.log(totalDamage)
    }

    refill(number: number) {
        this.ammo = this.maxAmmo;
        console.log(number - this.maxAmmo);
    }

    getType() {
        console.log(this.type);
    }

    getStatus() {
        console.log("Type " + this.type, "Ammo " + this.ammo, "Base damage " + this.baseDamage, "Max damage " + this.maxAmmo * this.baseDamage);
    }

    isPriority() {
        if (this.type = "F35") {
            console.log("True");
        } else {
            console.log("False");
        }
    }


}
 export default Plane;
