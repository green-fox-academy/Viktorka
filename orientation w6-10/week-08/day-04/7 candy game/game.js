'use strict';

let candies = document.querySelector('.create-candies');
let buyLollipops = document.querySelector('.buy-lollypops');
let candyRain = document.querySelector('.candy-machine');
let actualCandies = document.querySelector('.candies');
let pops = document.querySelector('.lollypops');

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
    candyCounter++;
    actualCandyNum();
}

function buyPops() {
    if (candyCounter >= 5) {
        candyCounter -= 5;
        actualCandyNum();
        addPop();
        console.log(popCounter)
    }
}
if (popCounter>=4){
    setTimeout(addOneCandy,1000)
}

candies.addEventListener('click', addOneCandy);
buyLollipops.addEventListener('click', buyPops);