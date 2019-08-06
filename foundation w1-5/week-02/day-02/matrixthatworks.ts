'use strict';

let matrix: number[][] = [
  // [0 , 1 ,2 ,3,],
];

let size: number = 3
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
})