const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static('assets'));


let evenArray = [];
let oddArray = [];
let wordsObj = {};
function yodaSpeaking(content) {
    let newContent = content.split(" ");
    for (let i = 0; i < newContent.length; i++) {
        if (i % 2 === 0 || i === 0 && newContent[i] !== "") {
            evenArray.push(newContent[i])
        } else {
            oddArray.push(newContent[i])
        }
    }
    wordsObj.evenArray = evenArray;
    wordsObj.oddArray = oddArray;
    return wordsObj;
}

function stringifyMyArray(obj) {
    let checker = 0;
    if (obj.evenArray.length > obj.oddArray.length) {
        checker = obj.evenArray.length;
    } else if (obj.evenArray.length < obj.oddArray.length) {
        cheker = obj.oddArray.length;
    } else if (obj.evenArray.length === obj.oddArray.length) {
        checker = oddArray.length
    }
    return checker;
}
function mixerOfTheWords(number) {
    let mixedText = [];
    for (let i = 0; i < number; i++) {
        if (oddArray[i] === undefined) {
            mixedText.push(evenArray[i]);
        } else {
            mixedText.push(oddArray[i]);
            mixedText.push(evenArray[i]);
        }
    } return mixedText
}
let words = ["1 2 3 4 5 6 7"]

app.post('/sith', (req, res) => {
    // console.log(mixerOfTheWords(stringifyMyArray(yodaSpeaking(req.body.text))))
    res.json({
        "text": mixerOfTheWords(stringifyMyArray(yodaSpeaking(req.body.text)))
        // "text" : "asd"
    })
})


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});