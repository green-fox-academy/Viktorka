'use strict';

let candies = document.querySelector('.create-candies');
let buyLollipops = document.querySelector('.buy-lollypops');
let candyRain = document.querySelector('.candy-machine');
let actualCandies = document.querySelector('.candies');
let pops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');

let speedCounter=0;
let candyCounter = 0;
let popCounter = 0;
function actualCandyNum(){
    actualCandies.textContent = candyCounter;
}
function addPop(){
    pops.textContent+="🍭";
    popCounter++;
}

function addOneCandy() {
    candyCounter+=1;
    actualCandyNum();
    console.log("")
    // console.log("candies: "+candyCounter)
}

function candyPerSecAdd(){
    candyCounter+=soe
}

function buyPops() {
    if (candyCounter >= 5) {
        candyCounter -= 5;
        actualCandyNum();
        addPop();
        if (popCounter%2===0 && popCounter!==0){
            speedCounter++;
            setInterval(addOneCandy,1000);
            speed.textContent=speedCounter;
        }
        
    }
}

function tenTimes(){
    
    
}

candies.addEventListener('click', addOneCandy);
buyLollipops.addEventListener('click', buyPops);
candyRain.addEventListener('click', tenTimes);