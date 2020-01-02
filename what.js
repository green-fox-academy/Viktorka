function lengthCounter(string) {
  let i = 0;
  for (str in string) {
    i++
  }
  return i
}

module.exports = lengthCounter;

function reverse(string) {
  let answer = ''
  for (let i = string.length - 1; i >= 0; i--) {
    answer += string[i];
  } return answer
}
// console.log(reverse('asdfghj'))



function shifter(array, number) {
  let answer = [];
  for (let i = array.length - number; i < array.length; i++) {
    answer.push(array[i])
  }
  for (let j = 0; j < array.length - number; j++) {
    answer.push(array[j]);
  }
  return answer
}
console.log(shifter([1, 2, 3, 4, 5], 1))




// 1 
// function maximumOccurringCharacter(text) {
//   // Write your code here
//   let maxOccuredCharacter = '';
//   let ammuntItOccured = 0;
//   let allChars = {};
//   for (let i = 0; i< text.length; i++){
//       if (text[i] in allChars){
//           allChars[text[i]]++;
//       } else {
//           allChars[text[i]] = 1;
//       }
//   }
//   for (let char in allChars){
//       if (allChars[char] > ammuntItOccured){
//           ammuntItOccured = allChars[char];
//           maxOccuredCharacter = char;
//       }
//   }
//   return maxOccuredCharacter;
// }

// 2
function shortestSubstring(s) {
  // Write your code here
  let uniqueCharacters = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in uniqueCharacters) {
      uniqueCharacters[s[i]]++;
    } else {
      uniqueCharacters[s[i]] = 1;
    }
  }
  let objKeys = Object.keys(uniqueCharacters);
  let startIndex = 0;
  let isMatch = false;
  let uniqueCharsLength = Object.keys(uniqueCharacters).length;
  let subStr = '';
  while (uniqueCharsLength <= s.length) {
    subStr = s.substr(startIndex, uniqueCharsLength);
    if (subStr.length === uniqueCharsLength) {
      match = true;
      for (i = 0; i < uniqueCharsLength; i++) {
        let val = objKeys[i];
        if (subStr.indexOf(val) === -1) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        return subStr.length;
      }
      startIndex++;

    } else {
      startIndex = 0;
      uniqueCharsLength++;
    }
  }
}
console.log(shortestSubstring('aabcce'))