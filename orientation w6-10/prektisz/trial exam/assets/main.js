'use strict';

const url = document.querySelector('#url');
const alias = document.querySelector('#alias');
const form = document.querySelector('form');
const sad = document.querySelector('.sadface')
const happy = document.querySelector('.happyface')

form.addEventListener('submit', e => {
  happy.setAttribute('style', 'display:none');
  sad.setAttribute('style', 'display:none');
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        happy.textContent = `Your alias is ${alias.value} secert code is ${xhr.response[0].secret_code}`
        happy.removeAttribute('style')
        form.reset();
      } else {
        sad.removeAttribute('style')
      }
    }
  };
  xhr.open('POST', '/api/links');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ url: url.value, alias: alias.value }));
});