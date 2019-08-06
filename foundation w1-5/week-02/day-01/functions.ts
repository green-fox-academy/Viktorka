/* let numberToMultiply: number = 12;

let twice: number = numberToMultiply * 2;
console.log(twice);

let anotherNumber:number = 25;

let twiceAnotherOne:number = anotherNumber * 2;

console.log(twiceAnotherOne); */

function printNumberAndChangeIt(inputNumber: number) {
    let doubledValue: number = inputNumber * 2;
    console.log(doubledValue);
}

function multiplication(base: number, another: number): number {
    return base * another;
}
printNumberAndChangeIt(13);
printNumberAndChangeIt(11);

console.log(multiplication(2, 9));