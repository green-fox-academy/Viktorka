let lineCount:number = 7;
let c:number = (lineCount/2);
let output:string='';
let output2:string='*';
let a:number=lineCount;
let b:number=lineCount*2-1;

if (c%2==0){
    c=c;
} else {
    c=c+1;
}



for ( output; output.length < c ; output +='1') {
    
}
 for ( output2; output2.length < 2*c ; output2 +='**' ) {
    a--;
    output = output.substring (0, a);
    console.log(output+output2);
}
/*output='1';
for ( output; output.length < c; output +='1' ) {
    b--;
    b--;
    output2 = output2.substring (0, b);
    console.log(output+output2);
}*/