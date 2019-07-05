'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export = {}
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
let length: number = 600 / 2;




ctx.beginPath();
ctx.moveTo(length + 20, length);
// ctx.lineTo(length,20);
// ctx.stroke();
for (let i2: number = 20; i2 < length; i2 += 20) {

    ctx.strokeStyle = "green";
    ctx.lineTo(length, i2);
    ctx.stroke();
    ctx.moveTo(length + i2, length);
}
ctx.moveTo(length + 20, length);
for (let i: number = 20; i < length; i += 20) {


    ctx.lineTo(length, 2 * length - i);
    ctx.stroke();
    ctx.moveTo(length + i, length);
}
ctx.moveTo(length - 20, length);
for (let i3: number = 20; i3 < length; i3 += 20) {


    ctx.lineTo(length,i3);
    ctx.stroke();
    ctx.moveTo(length - i3, length);
}
ctx.moveTo(length-20,length);
for (let i4: number = 20; i4 < length; i4 += 20) {


    ctx.lineTo(length, 2 * length - i4);
    ctx.stroke();
    ctx.moveTo(length - i4, length);
}
ctx.moveTo(300,20);
ctx.lineTo(300,580);
ctx.stroke();