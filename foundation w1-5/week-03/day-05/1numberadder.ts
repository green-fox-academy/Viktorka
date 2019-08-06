// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n: number):any {
    if (n === 0) {
        return 0;
    } else {
        return n + numberAdder(n - 1);
    }
}
console.log(numberAdder(126));
