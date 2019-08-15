
let evenArray = [];
let oddArray = [];
function yodaSpeaking(content) {
    let newContent = content.split(" ");
    let wordsObj = {};
    for (let i = 0; i < newContent.length; i++) {
        if (i % 2 === 0 || i === 0 && newContent[i]!=="") {
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
function mixerOfTheWords(number){
    let mixedText=[];
    for (let i=0; i< number;i++){
        mixedText.push(oddArray[i]);
        mixedText.push(evenArray[i]);
    } return mixedText
}

theContent={"text":"000 111 222 333 444 555 666"}

// console.log(yodaSpeaking(theContent.text))
// console.log(mixerOfTheWords(stringifyMyArray(yodaSpeaking(theContent.text))))
console.log(wordMixer)