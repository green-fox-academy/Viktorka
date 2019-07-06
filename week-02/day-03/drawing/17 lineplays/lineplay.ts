'use strict';
export ={};
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let length: number = 600;
ctx.beginPath();


function linePlays(x: number) {
    
    for (let i: number = 0; i < length; i += x) {

        ctx.strokeStyle = "purple";
        ctx.lineTo(600, i);
        ctx.stroke();
        ctx.moveTo(20 + i, 0);



    }
    ctx.beginPath();
    for (let i2: number = 0; i2 < length; i2 += x) {

        ctx.strokeStyle = "green";
        ctx.lineTo(i2, length);
        ctx.stroke();
        ctx.moveTo(0, x + i2);
    }
}



linePlays(30)






// function linePlays2(x: number, y: number) {
//     let startPoint: number = Math.sqrt(y);
//     for (let xz: number = 0; xz < 4; xz++) {

//         for (let i: number = x; i < length / Math.sqrt(y); i += x) {
//             ctx.strokeStyle = "purple";
//             ctx.lineTo(length / startPoint, i);
//             ctx.stroke();
//             ctx.moveTo(x + i, 0);
//         }
//         ctx.moveTo(x + length / 2, 0)
//     }
//     ctx.beginPath();
//     for (let i2: number = x; i2 < length / Math.sqrt(y); i2 += x) {

//         ctx.strokeStyle = "green";
//         ctx.lineTo(i2, length / Math.sqrt(y));
//         ctx.stroke();
//         ctx.moveTo(0, x + i2);
//     }
//     if (y !== 1) {

//     }
// }


