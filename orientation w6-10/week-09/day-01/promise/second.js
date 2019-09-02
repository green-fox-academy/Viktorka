'use strict';

let promise = new Promise((fulfil, reject) => {
    setTimeout(() => fulfil('FULFILLED!'), 300);
})
promise.then(result => {
    console.log(result);
})

// var promise = new Promise(function (fulfill, reject) {
//     // After the timeout reaches 300ms, fulfill the promise with value
//     // 'FULFILLED!'.

//     setTimeout(function () {
//       fulfill('FULFILLED!');
//     }, 300);
//   });