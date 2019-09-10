'use strict';

const audio = document.querySelector('audio');
const play = document.querySelector('#play');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const playlist = document.querySelectorAll('.hide')
let actualSong = document.querySelector('.hide')
actualSong.classList.add('actual')

// play.onclick =() => {
// play.play()
// }
audio.addEventListener('loadstart', () => console.log('loadstart happened'));
audio.addEventListener('play', () => console.log('play happened'));
audio.addEventListener('pause', () => console.log('pause happened'));
audio.addEventListener('ended', () => console.log('ended happened'));
audio.addEventListener('progress', () => console.log('progress happened'));

let nextSong = () => {
    let nextSong = document.querySelector('.actual').parentElement.nextElementSibling.childNodes[3];
    if (document.querySelector('.actual').parentElement.nextElementSibling === null) {
        nextSong = document.querySelector('.hide')
    }
    let removeMe = document.querySelector('.actual')
    audio.src = nextSong.textContent;
    removeMe.classList.remove('actual');
    nextSong.classList.add('actual');
    // console.log(removeMe)
}
let prevSong = () => {
    console.log('prev song')
}
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);