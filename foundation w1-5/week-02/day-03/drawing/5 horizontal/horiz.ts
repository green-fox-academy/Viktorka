'use strict';
export = {}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

//let xCord:number[]=[0, 400, 300];
//let yCord:number[]=[50, 300,223];
ctx.beginPath();
function horizontalYo (xCord:number,yCord:number) {
        ctx.moveTo(xCord,yCord);
        ctx.lineTo(xCord+50,yCord);
        ctx.stroke()
}

for (let i:number=50 ; i<150; i+=50) {
    horizontalYo(i,i)
}

horizontalYo(200,200)

/*for (let i:number=0 ; i<3; i++) {
    
    ctx.moveTo(xCord[i],yCord[i]);
    ctx.lineTo(xCord[i]+50,yCord[i]);
        
} */
