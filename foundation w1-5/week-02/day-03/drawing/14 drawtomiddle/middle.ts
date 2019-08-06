'use strict';
export = {}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
//deffo not the task to do..
ctx.fillRect(0,0,600,400);
function drawTheLine(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = "white"
    ctx.stroke();
}
for (let i: number = 0; i < 420; i = i + 20) {
    /*    ctx.moveTo(0, i);
        ctx.lineTo(300, 200);
        ctx.stroke(); */
    drawTheLine(0, 0 + i);
}
for (let i2: number = 0; i2 < 620; i2 = i2 + 20) {
    /*   ctx.moveTo(i2, 0);
        ctx.lineTo(300, 200);
        ctx.stroke();*/
    drawTheLine(+i2, 0);
}
for (let i3: number = 0; i3 < 420; i3 = i3 + 20) {
    /* ctx.moveTo(600, i3);
     ctx.lineTo(300, 200);
     ctx.stroke();*/
    drawTheLine(600, 0 + i3);
}
for (let i4: number = 0; i4 < 620; i4 = i4 + 20) {
    /* ctx.moveTo(i4, 400);
      ctx.lineTo(300, 200);
      ctx.stroke();*/
    drawTheLine(0 + i4, 400);
}



/*

drawTheLine(150, 55)*/