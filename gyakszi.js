'use strict';

function findNumber(arr, k) {
  // Write your code here
  if (arr.includes(k)) {
    return 'Yes';
  } else {
    return 'No'
  }
}

// console.log(findNumber([1,2,3,4,5,6,7],8))
// console.log(findNumber([1,2,3,4,5,6,7],5))

function oddNumbers(l, r) {
  // Write your code here / print odd nums from l to r (including them)
  for (let i = l; i < r + 1; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// library fine
function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if (y1 - y2 > 0) {
    fine = 10000;
  }
  if (y1 === y2 && m1 === m2 && d1 - d2 > 0) {
    fine = (d1 - d2) * 15;
  } else if (y1 === y2 && m1 - m2 > 0) {
    fine = (m1 - m2) * 500;
  }

  return fine;
}
// console.log(libraryFine(9,6,2015,6,6,2015))

function camelcase(s) {
  let counter = 1;
  let capitalCase = 'ABCDEFGHIJKLMNOPQRSTUXVYWZ';
  for (let i = 0; i < s.length; i++) {
    if (capitalCase.includes(s[i])) {
      counter++;
    }
  }
  return counter;
}
// console.log(camelcase('nagzAFaszom'))

function hackerrankInString(s) {
  let hrLength = 'hackerrank'.length;
  let letters = {};
  for (let i = 0; i < 'hackerrank'.length; i++) {
    if ('hackerrank'[i] in letters) {
      letters['hackerrank'[i]]++;
    } else {
      letters['hackerrank'[i]] = 1;
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (s[i] in letters) {
      letters[s[i]]--;
      if (letters[s[i]] === 0) {
        delete letters[s[i]];
      }
    }
  }

}
// codewars

function duplicateCount(text) {
  let textToWork = text.toLowerCase();
  let uniqChars = {};
  for (let i = 0; i < textToWork.length; i++) {
    if (textToWork[i] in uniqChars) {
      uniqChars[textToWork[i]]++;
    } else {
      uniqChars[textToWork[i]] = 1;
    }
  }
  let uniqKeys = Object.keys(uniqChars);
  let uniqVals = Object.values(uniqChars);
  let answer = '';
  for (let j = 0; j < uniqVals.length; j++) {
    if (uniqVals[i] > 1) {
      answer += uniqVals[i]
    }
  }
  return answer.length;
}


// function toUnderscore(string) {
//   let answer = string.split('_');
//   let outputString = '';
//   for (let i = 0; i < answer.length; i++) {
//     outputString += answer[i][0].toUpperCase()+answer[i].substring(1)
//   }
//   return outputString;
// }

function toUnderscore(string) {
  let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTVUWXYZ';
  let outputString = '';
  outputString += string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (capitalLetters.includes(string[i])) {
      outputString += '_' + string[i].toLowerCase();
    } else if (!capitalLetters.includes(string[i])) {
      outputString += string[i];
    }
  }
  return outputString
}

// toUnderscore('CamelCase')

function getNthFib(n) {
  // Write your code here.
  let fibo = [0, 1];
  for (let i = 0; i < n; i++) {
    fibo.push(fibo[i] + fibo[i + 1])
  }
  return fibo[n - 1]
}
// console.log(getNthFib(3))

function largestRange(array) {
  // Write your code here.
  let outputArray = [];
  let inputArray = array.sort((a, b) => a - b);
}

// console.log(largestRange());

function isValidWalk(walk) {
  //insert brilliant code here
  let horizontal = 0;
  let vertical = 0;
  let verticalN = 0;
  let verticalS = 0;
  let answer = false;
  if (walk.length !== 10) {
    return false
  }
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      vertical++;
    }
    if (walk[i] === 's') {
      vertical--;
    }
    if (walk[i] === 'e') {
      horizontal++;
    }
    if (walk[i] === 'w') {
      horizontal--;
    }
  }
  if (horizontal === 0 && vertical === 0) {
    answer = true;
  }
  return answer;
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

function divisibleCount(x, y, k) {
  //code me
  let counter = 0;
  for (let i = x; i <= y; i++) {
    if (i % k===0){
      counter++;
    }    
  }
  return counter;
}

console.log(Math.floor(12/3))
console.log(Math.floor(24/3))
