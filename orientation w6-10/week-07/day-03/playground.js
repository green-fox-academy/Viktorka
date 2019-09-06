
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
    for (let i = 0; i < number + 1; i++) {
        if (oddArray[i] === undefined) {
             mixedText.push(evenArray[i]);
        } else {
            mixedText.push(oddArray[i]);
            mixedText.push(evenArray[i]);
        }
    } return mixedText
}

theContent = { "text": "000 111 222 333 444 555 666" }

let obj = {
    1: [1],
    4: [2, 2, 3, 4]
}

// console.log(obj[4].length)
// console.log(wordsObj)
console.log(mixerOfTheWords(stringifyMyArray(yodaSpeaking(theContent.text))))
