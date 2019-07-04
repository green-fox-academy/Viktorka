// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let daMatrix: number[][] = [
    [0, 1]
];
let size: number = 5;
for (let i: number = 0; i <= size; i++) {
    let row: number[] = [];
    for (let inner: number = 0; inner < size; inner++) {
        if (size - inner - 1 == i) {
            row.push(0);

        } else {
            row.push(1)
        }
    }


daMatrix.forEach(function (row))
console.log(row.join(""));
}

// let size: number = 4;
//   for (let index = 0; index < size; index++) {
//     let row: number[] = [];
//     for (let inner: number = 0; inner < size; inner++) {
//       if (size - inner - 1 === index) {
//         row.push(1);
//       } else {
//         row.push(0);
//       }
//     }
//     matrix.push(row);
//   }

//   matrix.forEach(function (row) {
//     console.log(row.join(" "));
//   }) */