
'use strict';

const password = document.querySelector('#password');
const username = document.querySelector('#username');
const form = document.querySelector("form");

form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                location.href='http://localhost:3050';
            } else {
                alert('Try again');
                location.href='http://google.com';
                console.log('Crap');
            }
        }
    };
    xhr.open('POST', '/send');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ password: password.value, username: username.value }));
    form.reset();
});