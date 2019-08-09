'use strict'
const imageList = [
    { url: "1.jpg", text: "1", moreText: "111" },
    { url: "2.jpg", text: '2', moreText: "222" },
    { url: "3.jpg", text: '3', moreText: "333" },
    { url: "4.jpg", text: '4', moreText: "444" },
    { url: "5.jpg", text: '5', moreText: "555" },
    { url: "6.jpg", text: '6', moreText: "666" },
    { url: "7.jpg", text: "7", moreText: "777" },
    { url: "8.jpg", text: '8', moreText: "888" },
    { url: "9.jpg", text: '9', moreText: "999" }
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
            mainText.textContent= imageList[i].moreText;
        }
    }
}

function changeTextOnClick() {

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

let smallPix = document.querySelectorAll(".small");

for (let i = 0; i < smallPix.length; i++) {
    smallPix[i].onclick = () => { //(event)
        mainImg.src = smallPix[i].src; //event.target.src
        document.querySelector(".currentImage").classList.remove("currentImage");
        smallPix[i].classList.add('currentImage');

    }
}


nextButton.onclick = () => {
    toNextImage();
}
prevButton.onclick = () => {
    toPreviousImage();
}

document.body.addEventListener('keydown', onKeyPress);

