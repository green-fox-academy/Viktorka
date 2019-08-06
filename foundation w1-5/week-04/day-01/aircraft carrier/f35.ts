'use strict'
import Plane from './plane'

class F35 extends Plane {


    constructor(type: "F35", maxAmmo: 12, ammo: 0, baseDamage: 50) {
        super(type, maxAmmo, ammo, baseDamage)
    }
}





export default F35