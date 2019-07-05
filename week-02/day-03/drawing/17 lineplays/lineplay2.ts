'use strict';
export ={};
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let length: number = 600;
ctx.beginPath();


function linePlays(x: number) {
    for (let i: number = 0; i < length / 2; i += x) {

        ctx.strokeStyle = "purple";
        ctx.lineTo(length / 2, i);
        ctx.stroke();
        ctx.moveTo(x + i, 0);
    }
    ctx.beginPath();
    for (let i2: number = 0; i2 < length / 2; i2 += x) {

        ctx.strokeStyle = "green";
        ctx.lineTo(i2, length / 2);
        ctx.stroke();
        ctx.moveTo(0, x + i2);
    }
}
// linePlays(20)


function linePlaySide(x: number) {
    ctx.beginPath();
    ctx.moveTo(length / 2, 0);
    ctx.strokeStyle = "red";
    for (let i: number = 0; i < length / 2; i += x) {

        ctx.lineTo(length, i);
        ctx.stroke();
        ctx.moveTo(x + length / 2 + i, 0);
    }
    ctx.beginPath();
    ctx.moveTo(length / 2, 0);
    ctx.strokeStyle = "orange";
    for (let i2: number = 0; i2 < length / 2; i2 += x) {


        ctx.lineTo(i2 + length / 2, length / 2);
        ctx.stroke();
        ctx.moveTo(0 + length / 2, x + i2);
    }
}

//linePlaySide(20)


function linePlaysDouble(x: number, y: number) {
    let sqrt: number = Math.sqrt(y);
    ctx.beginPath()  //y = mekkora legyen felosztva
    ctx.moveTo(length / sqrt, 0)
    ctx.strokeStyle = "black"
    for (let i: number = 0; i < length / sqrt; i += x) {
        // ctx.strokeStyle = "purple";
        ctx.lineTo(length / sqrt, i);
        ctx.stroke();
        ctx.moveTo(x + i, 0);
    }


    ctx.beginPath();
    ctx.moveTo(length / sqrt, 0);
    ctx.strokeStyle = "orange";
    for (let i: number = 0; i < length / sqrt; i += x) {


        ctx.lineTo(i + length / sqrt, length / sqrt);
        ctx.stroke();
        ctx.moveTo(0 + length / sqrt, x + i);
    }
}
linePlaysDouble(20, 4)