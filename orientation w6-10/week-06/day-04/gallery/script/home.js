'use strict'
const imageList = [
    { url: "1.jpg", text: "Kung fu Panda", moreText: "The kung fu Panda who will beat everyone up!" },
    { url: "2.jpg", text: 'Fun Panda', moreText: "The fun Panda gives no shit" },
    { url: "3.jpg", text: 'Cute Panda', moreText: "The cute Panda is not cute" },
    { url: "4.jpg", text: 'Clumsy Panda', moreText: "The clumsy Panda is..well clumsy" },
    { url: "5.jpg", text: 'Angry Panda', moreText: "The angry Panda needs to hakuna their tatas" },
    { url: "6.jpg", text: 'Vegan Panda', moreText: "The vegan Panda can be fat too" },
    { url: "7.jpg", text: "Sith Panda", moreText: "The sith Panda is strong with the force" },
    { url: "8.jpg", text: 'Black and White', moreText: "Will make it right" },
    { url: "9.jpg", text: 'Disappointed Panda', moreText: "Let's do stuff" }
]
let currentImage = document.querySelector(".small").classList.add("currentImage");
let prevButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let mainImg = document.querySelector(".main");
let mainTitle = document.querySelector(".TITLE");
let mainText = document.querySelector(".theText");

function changeText() {
    for (let i = 0; i < imageList.length; i++) {
        if (mainImg.src === "http://localhost:3000/" + imageList[i].url) {
            mainTitle.textContent = imageList[i].text;
            mainText.textContent = imageList[i].moreText;
        }
    }
}

function toPreviousImage() {
    let prevImage = document.querySelector(".currentImage").previousElementSibling;
    if (prevImage === null) {
        let allElement = document.querySelectorAll(".small")
        prevImage = allElement[allElement.length - 1];
    }
    mainImg.src = prevImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    prevImage.classList.add("currentImage");
    changeText()

}

function toNextImage() {
    let nextImage = document.querySelector(".currentImage").nextElementSibling;
    if (nextImage === null) {
        nextImage = document.querySelector(".small");
    }
    mainImg.src = nextImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    nextImage.classList.add("currentImage");
    changeText()
}

function onKeyPress(event) {
    switch (event.keyCode) {
        case 37:
            toPreviousImage();
            break;
        case 39:
            toNextImage();
            break;
    }
}

nextButton.onclick = () => {
    toNextImage();
}
prevButton.onclick = () => {
    toPreviousImage();
}

let smallPix = document.querySelectorAll(".small");

for (let i = 0; i < smallPix.length; i++) {
    smallPix[i].onclick = () => { //(event)
        mainImg.src = smallPix[i].src; //event.target.src
        document.querySelector(".currentImage").classList.remove("currentImage");
        smallPix[i].classList.add('currentImage');
        changeText();
    }
}



document.body.addEventListener('keydown', onKeyPress);

