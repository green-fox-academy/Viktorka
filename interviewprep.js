'use strict'

// String manipulation
// making anagrams

function makeAnagram(string1, string2) {
  let counter = 0;
  let characters = {};

  for (let char of string1) {
    characters[char] = (characters[char] || 0) + 1;
  }

  for (let char of string2) {
    characters[char] = (characters[char] || 0) - 1;
  }

  for (let num in characters) {
    counter += Math.abs(characters[num])
  }
  return counter;
}

// console.log(makeAnagram("cde", "abc"))

// altering characters
function alternatingCharacters(s) {
  let counter = 0;
  let outputString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === outputString[outputString.length - 1]) {
      counter++
    } else {
      outputString += s[i];
    }
  }
  return counter
}

// alternatingCharacters('AAAA')
// alternatingCharacters('BBB')
// alternatingCharacters('ABABABAB')
// alternatingCharacters('AAABBB')

// sherlock and the valid string

function isValid(s) {
  let characters = {};
  let answer = '';
  let occurance = 1; // TODO find a way to find out occurance
  for (let letter of s) {
    characters[letter] = (characters[letter] || 0) + 1;
  }
  let values = Object.values(characters);
  let counter = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== occurance) {
      counter++;
      if ((values[i] - 1) !== occurance) {
        counter++;
      }
    }
  }
  if (counter > 1) {
    answer = 'NO';
  } else {
    answer = 'YES';
  };
  return [answer, counter];
}

// console.log(isValid('abc'));
// console.log(isValid('abcc'));
// console.log(isValid('abbcc'));
// console.log(isValid('abccc'));

// greedy algorithms
// min absolute difff
function minimumAbsoluteDifference(arr) {
  // let diff = 100000000000;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (Math.abs(arr[i] - arr[j]) < diff && i!==j) {
  //       diff = Math.abs(arr[i] - arr[j]);
  //     }
  //   }
  // }
  // return diff
  arr.sort((a, b) => a - b);
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    let absDiff = Math.abs(arr[i+1] - arr[i]);
    if (!min || absDiff < min) min = absDiff;
    if (min ===0) return 0;
  }

  return min;
}
console.log(minimumAbsoluteDifference([1, 2, 4, 8]));