'use strict';

const title = document.querySelector('#title');
const url = document.querySelector('#url');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(`thanks`)
            location.href = 'http://localhost:2999'
        }
    }

xhr.open('POST', '/post');
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send(JSON.stringify({title: title.value, url: url.value}))
form.reset()
});