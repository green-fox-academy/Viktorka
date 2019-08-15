const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static('assets'));


let evenArray = [];
let oddArray = [];
function yodaSpeaking(content) {
    let newContent = content.split(" ");
    let wordsObj = {}
    for (let i = 0; i < newContent.length; i++) {
        if (i % 2 === 0 || i === 0) {
            evenArray.push(newContent[i])
        } else {
            oddArray.push(newContent[i])
        }
    }
    wordsObj.evenArray = evenArray;
    wordsObj.oddArray = oddArray;
    return wordsObj;
}
function countArrays(obj) { 
    let checker = 0
    if (obj.evenArray.length > obj.oddArray.length) {
        checker = obj.oddArray.length;
    } else if (obj.evenArray.length === obj.oddArray.length) {
        checker = obj.oddArray.length
    } else {
        cheker = obj.evenArray.length;
    }
    return checker;
}
function mixerOfTheWords(number){
    let mixedText=[];
    for (let i=0; i< number;i++){
        mixedText.push(oddArray[i]);
        mixedText.push(evenArray[i]);
    } return mixedText
}

function trystuff(text){
    console.log(text)
}


app.post('/sith', (res, req) => {
    req.json({
        // "text": mixerOfTheWords(countArrays(yodaSpeaking(req.body.text)))
        "text" : trystuff(req.body.text)
    })
})


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});