'use strict';

const audio = document.querySelector('audio');
const play = document.querySelector('#play');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const playlist = document.querySelectorAll('.hide')

// play.onclick =() => {
// play.play()
// }
audio.addEventListener('loadstart', () => console.log('loadstart happened'));
audio.addEventListener('play', () => console.log('play happened'));
audio.addEventListener('pause', () => console.log('pause happened'));
audio.addEventListener('ended', () => console.log('ended happened'));
audio.addEventListener('progress', () => console.log('progress happened'));

let nextSong = () => {
    // console.log(playlist[0].innerHTML)
    let source;
    for (let i = 0; i < playlist.length; i++) {
        source=playlist[i+1].innerHTML;
        console.log(source)
        audio.src=source;
    //    return source
    }

}
let prevSong = () => {
    console.log('prev song')
}
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);