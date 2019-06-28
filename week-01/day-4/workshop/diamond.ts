let lineCount:number = 8;
let output:string=' ';
let output2:string='*';
let a:number=lineCount;

for ( output; output.length <= lineCount-1 ; output +=' ') {
    
 }
 for ( output2; output2.length <= 2*lineCount ; output2 +='**' ) {
    a--;
    output = output.substring (0, a);
    console.log(output+output2);
    
}