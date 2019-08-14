const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static('assets'));


function yodaSpeaking(content) {
    let newContent = content.split(" ");
    let wordsObj = {}
    let evenArray = [];
    let oddArray = [];
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
function stringifyMyArray(obj) { 
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



app.post('/sith', (res, req) => {
    req.json({
        "text": "This is my example sentence. Just for fun."
    })
})


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});