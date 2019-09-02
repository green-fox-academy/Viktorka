'use strict';


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('TIMED OUT!'), 300);
});
myPromise.then(result => {
    console.log(result)
})