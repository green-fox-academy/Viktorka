'use strict'

/*let matrix: number[][] = [];

console.log(matrix);

/*let matrix2: Array<Array<number>>= [
    [1],
    [2]
]
console.log(matrix2) 
let sizenumber: number = 5;
let size: number = sizenumber;
for (let index = 0; index < size; index++) {
    let row: number[] = [];
    for (let inner: number = 0; inner < size; inner++) {
        row.push(inner);
    }
    matrix.push(row);
}

console.log(matrix) */
/* let matrix: number[][] = [   ================= MEGOLDAS ITT
    // [0 , 1 ,2 ,3,],
  ];
  
  let size: number = 4;
  for (let index = 0; index < size; index++) {
    let row: number[] = [];
    for (let inner: number = 0; inner < size; inner++) {
      if (size - inner - 1 === index) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }
  
  matrix.forEach(function (row) {
    console.log(row.join(" "));
  }) */




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

let sizeVariable: number = 4;
let matrix: number[][] = [
  [1, 2, 3, 4]
];
for (let index: 0; index < sizeVariable; index++) {
  let row: number[] = [];
  for (let inner: number = 0; inner < sizeVariable; inner++) {
    if (sizeVariable - inner - 1 === index) {
      row.push(1);
    } else (row.push(0));
  }
  matrix.push(row);
}
console.log(matrix);