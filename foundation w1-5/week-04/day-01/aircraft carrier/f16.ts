'use strict'
import Plane from './plane'

class F16 extends Plane{

    constructor(type: "F16", maxAmmo: 8, ammo: 0, baseDamage: 30){
        super(type,maxAmmo,ammo,baseDamage)
    }
}

export default F16