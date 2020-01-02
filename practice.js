// most common inputString

function maximumOccuringCharacter(inputString) {
  let maxOccuredCharater = "";
  let max = 0;
  let allChars = {};
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] in allChars) {
      allChars[inputString[i]]++;
    } else {
      allChars[inputString[i]] = 1;
    }
  }
  for (let character in allChars) {
    if (allChars[character] > max) {
      max = allChars[character];
      maxOccuredCharater = character;
    }
  }
  return maxOccuredCharater;
}
// replace 2nd for with
// let keys = Object.keys(allChars);
// let values = Object.values(allChars);
// for (let j = 0; j < keys.length; j++) {
//   if (values[j] > max) {
//     max = values[j];
//     maxOccuredCharater = keys[j];
//   }    
// }
// return maxOccuredCharater;
// }
// console.log(maximumOccuringCharacter("asdaa"));

// pseudo code
// Mystery algorythm
function mysteryAlgorithm(a, b) {
  let x = a;
  let y = b;
  while (x != y) {
    if (x > y) {
      x = x - y;
      // console.log(`x is ${x}`)
    } else if (y > x) {
      y = y - x;
      // console.log(`y is ${y}`)
    }
  }
  return x;
}

// console.log(mysteryAlgorithm(30, 15));

// complexity https://codeaccepted.wordpress.com/2013/08/19/algorithm-complexity/
// log2(n)



// fun with anagrams

function funWithAnaggrams(strArray) {

  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray.length; j++) {
      if (strArray[i].split('').sort().join() === strArray[j].split('').sort().join() && i !== j) {
        strArray.splice(j, 1);
        j = i;
      }
    }
  }
  return strArray;
}
// console.log(funWithAnaggrams(['code', 'cdoe', 'frame', 'frema', 'coed', 'famer', 'asd']));

// shortest substring

// function shortestSubstring(s) {
//   let uniqueChars = {};
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in uniqueChars) {
//       uniqueChars[s[i]]++;
//     } else {
//       uniqueChars[s[i]] = 1;
//     }
//   }
//   const arrLen = Object.keys(uniqueChars).length;
//   let lenOfSubStr = arrLen;
//   const strLen = s.length;
//   let startIdx = 0;
//   let subStr;
//   let match;
//   let i;
//   let val;
//   while (lenOfSubStr <= strLen) {
//     subStr = s.substr(startIdx, lenOfSubStr);
//     if (subStr.length === lenOfSubStr) {
//       match = true;
//       for (let i = 0; i < arrLen; i++) {
//         val = Object.keys(uniqueChars)[i];
//         if (subStr.indexOf(val) === -1) {
//           match = false;
//           break;
//         }
//       }
//       if (match) {
//         return subStr.length;
//       }
//       startIdx++;
//     } else {
//       startIdx = 0;
//       lenOfSubStr++;
//     }
//   }
//   return null;
// }

const countUniqueCharacters = (inputString) => {
  let uniqueCharacters = {};
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] in uniqueCharacters) {
      uniqueCharacters[inputString[i]]++;
    } else {
      uniqueCharacters[inputString[i]] = 1;
    }
  }
  return uniqueCharacters;
}
//
const shortestSubstring = (s) => {

  const characterOccuranceObject = countUniqueCharacters(s);
  // console.log(characterOccuranceObject)
  const numberOfUniqueCharacters = Object.keys(characterOccuranceObject).length;
  // console.log(numberOfUniqueCharacters)
  let minimumLengthOfSubstring = numberOfUniqueCharacters;
  let counter = 0;

  let isShortest;
  let temporarySubString;
  let temporaryValue;

  while (minimumLengthOfSubstring <= s.length) {
    temporarySubString = s.substr(counter, minimumLengthOfSubstring);
    // console.log(temporarySubString)
    if (temporarySubString.length === minimumLengthOfSubstring) {
      isShortest = true;

      for (let i = 0; i < numberOfUniqueCharacters; i++) {
        temporaryValue = Object.keys(characterOccuranceObject)[i];
        if (temporarySubString.indexOf(temporaryValue) === -1) {
          isShortest = false;
          break;
        }
      }
      if (isShortest) {
        return [temporarySubString.length,temporarySubString];
      }
      counter++;
    } else {
      counter = 0;
      minimumLengthOfSubstring++;
    }
  }
}

// console.log(smallestSubString('aaaaaaaaaaabbbbbaaaaacbad'));
console.log(shortestSubstring('aabcce'));
