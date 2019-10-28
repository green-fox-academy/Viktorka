// // return biggest from every 2nd from array 
'use strict'
function splitter(string, div) {
  let answer = [''];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === div) {
      answer.push('')
      counter++
    } else {
      answer[counter] += string[i]
    }
  } return answer
}

console.log(splitter('a,dd,eee,fff',','))