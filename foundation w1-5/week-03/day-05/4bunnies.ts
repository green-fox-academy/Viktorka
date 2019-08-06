// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies 
// recursively (without loops or multiplication).

function ears(n: number):any {
    if (n === 0) {
        return 0;
    } else {
        return 2*n;
    }
}
console.log(ears(5))