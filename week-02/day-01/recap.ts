'use strict'

/*let myName: string = "Viktor";
let yourName: string = "Viktor";
let hisName: string = "Viktor";

let cutePuppy: string[] = ["Morzsi", "Liza", "Furkesz", "Riley"];

for (let i:number=0; i<4; i++){

    console.log(cutePuppy[i]);
}

cutePuppy.forEach
    (function (puppy) {
        console.log(puppy);
    })

let diffArray:any[]=["Viktor", true, true];

console.log("before "+diffArray);

diffArray.splice( 0, 1, "marks");

console.log("after "+ diffArray);  

let doubles:number []=[1,2,3,4,5].map(function(i) {
    return i ** 2;
})

console.log(doubles) 

let odds:number []=[1,2,3,4,5].filter(function(item){
    return item % 2 !== 0;
})

console.log("Odds are "+odds); 

let magic:number []=[];
console.log(magic[-100]); */

let array1:number []=[1,2];
let array2:number []=[3,4];
let array3:number []=[...array1,...array2];
console.log(array3);