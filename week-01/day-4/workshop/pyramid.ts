
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount:number = 4;
let output:string=' ';
let output2:string='*';
let a:number=lineCount;

for ( output; output.length <= lineCount/2 ; output +=' ') {
    
 }
 for ( output2; output2.length <= 2*lineCount ; output2 +='**' ) {
    a--;
    output = output.substring (0, a);
    console.log(output+output2);
    
}

