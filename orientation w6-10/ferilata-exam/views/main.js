'use strict';
let select = document.querySelector('select');
let ul = document.querySelector('ul');


window.onload = function loadData() {
  fetch('/api/items')
    .then(response => response.json())
    .then(response2 => {
      let myJson = response2;
      myJson.forEach(e => {
        let option = document.createElement('option');
        option.textContent = e.title;
        select.appendChild(option);
        let liElem = document.createElement('li');
        liElem.textContent = `${e.title}(highest bid: ${e.highestBid}, ${e.highestBidderName})`;
        ul.appendChild(liElem);
      })
    })
}