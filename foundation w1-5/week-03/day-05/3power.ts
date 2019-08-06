// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
'use strict';
function powerN(base: number, n: number): number {

    if (base > 0 && n > 0) {
        if (n < 1) {
            return 1;
        } else {
            return base * powerN(base, n - 1)
        }
    } else if (base === 0){
        return 0;
    } else {
        return 1;
    }
}
console.log(powerN(2, 3))