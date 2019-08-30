'use strict';

let candies = document.querySelector('.create-candies');
let buyLollipops = document.querySelector('.buy-lollypops');
let candyRain = document.querySelector('.candy-machine');
let actualCandies = document.querySelector('.candies');
let pops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let timer = 15 * 1000;
let countDown = timer / 1000;
let speedCounter = 0;
let candyCounter = 0;
let popCounter = 0;
buyLollipops.disabled = true;
let popPrice = 30;
buyLollipops.textContent = `Buy Lollipops (${popPrice}🍬)`;


function actualCandyNum() {
    actualCandies.textContent = candyCounter;
}
function addPop() {
    if (pops.textContent === "0") {
        pops.textContent = "🍭";
    } else {
        pops.textContent += "🍭";
    }
    popCounter++;
}

function addOneCandy() {
    candyCounter += 1;
    actualCandyNum();
    if (candyCounter >= popPrice) {
        buyLollipops.disabled = false;
    }
}

function buyPops() {
    if (candyCounter >= popPrice) {
        buyLollipops.disabled = false;
        candyCounter -= popPrice;
        actualCandyNum();
        addPop();
        buyLollipops.disabled = true;
        if (popCounter % 2 === 0 && popCounter !== 0) {
            speedCounter++;
            setInterval(addOneCandy, 1000);
            speed.textContent = speedCounter;
        }
    }
}

function theCandyShop() {
    if (candyCounter >= 1000) {
        document.body.setAttribute('background', 'https://cdn.unifiedcommerce.com/content/product/large/079346117475.jpeg');
    }
}

function candyRainRestart() {
    candyRain.disabled = false;
    candyRain.textContent = 'Make candy rain';
}

function tenTimes() {
    if (speedCounter !== 0) {
        speed.textContent = speedCounter * 10;
        speedCounter = speedCounter * 10;
        for (let i = 0; i <= speedCounter; i++) {
            setInterval(addOneCandy, 1000);
            speed.textContent = speedCounter;
            candyRain.disabled = true;
            // setTimeout(candyRainRestart, timer);
        }
        let countDowner = setInterval(() => {
            countDown--;
            candyRain.textContent = `${countDown}`;
            console.log(countDown);
            setTimeout(candyRainRestart, timer);
            candyRain.disabled = true;
            if (countDown <= 0) {
                // candyRain.textContent = 'Make candy rain';
                clearInterval(countDowner);
            }
        }, 1000);
        countDown = timer / 1000;
    }
}

candies.addEventListener('click', addOneCandy);
buyLollipops.addEventListener('click', buyPops);
candyRain.addEventListener('click', tenTimes);
setInterval(theCandyShop,1000)