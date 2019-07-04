'use strict';
export ={}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box: any[] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let wut: any[] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

ctx.beginPath()

function connectMe(myArray: any) {
    ctx.moveTo(myArray[0][0], myArray[0][1]);
    ctx.strokeStyle = "green";
    ctx.moveTo(myArray[myArray.length - 1][0], myArray[myArray.length - 1][1]);
    ctx.lineTo(myArray[0][0], myArray[0][1]);
    for (let i: number = 0; i < myArray.length; i++) {
        ctx.lineTo(myArray[i][0], myArray[i][1]);
        ctx.stroke();
    }

}



connectMe(wut)
connectMe(box)
/*
ctx.moveTo(box[0][0], box[0][1]);
ctx.lineTo(box[1][0], box[1][1]);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.stroke(); */