const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());
app.use(express.static('assets'));


app.get('/', (req, res) => {
    res.send('asd');
});


function sumNums(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    } return sum;
}

function multiplyNum(array) {
    let multy = 1;
    for (let i = 0; i < array.length; i++) {
        multy = array[i] * multy;
    } return multy;
}

function doubleArrayNums(array) {
    let doubled = []
    for (let i = 0; i < array.length; i++) {
        doubled.push(array[i] *= 2)
    }
    return doubled;
}


app.post('/arrays', (req, res) => {
    if (req.body.what === undefined || req.body.numbers === undefined) {
        req.json({
            "error": "Please provide what to do with the numbers!"
        })
    } else if (req.body.what === "sum") {
        res.json({
            "what": req.body.what,
            "numbers": sumNums(req.body.numbers)
        })
    } else if (req.body.what === "multiply") {
        res.json({
            "what": req.body.what,
            "numbers": multiplyNum(req.body.numbers)
        })
    } else if (req.body.what === "double") {
        res.json({
            "what": req.body.what,
            "numbers": doubleArrayNums(req.body.numbers)
        })
    }
})





app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});