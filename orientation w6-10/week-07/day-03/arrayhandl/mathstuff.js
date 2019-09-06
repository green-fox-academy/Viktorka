'use strict'

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

module.exports = function doTheStuff(req, res) {
    let respObj = {};
    switch (req.body.what) {
        case "sum":
            respObj = {
                "what": req.body.what,
                "numbers ": sumNums(req.body.numbers)
            }
            break;
        case "multiply":
            respObj = {
                "what": req.body.what,
                "numbers": sumNums(req.body.numbers)
            }
            break;
        case "double":
            respObj = {
                "what": req.body.what,
                "numbers": doubleArrayNums(req.body.numbers)
            }
            break;
        default: respObj = { "error": "you mug" };
    } res.json(respObj);
}
