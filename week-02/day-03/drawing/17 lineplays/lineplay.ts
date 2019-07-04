'use strict';
export ={};
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;




ctx.moveTo(10,0)
ctx.beginPath();
for (let i:number =10; i < 610; i+=10){
    
    ctx.strokeStyle="purple";
    ctx.lineTo(600,i);
    ctx.stroke();
    ctx.moveTo(20+i,0);

}
ctx.beginPath();
for (let i2:number =10; i2 < 610; i2+=10){
    
    ctx.strokeStyle="green";
    ctx.lineTo(i2,600);
    ctx.stroke();
    ctx.moveTo(0, 20+i2);
}
