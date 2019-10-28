// 1.

// Create a function that takes an array of float numbers and returns with the sum of those numbers
// 2.

// Create a function that reverses a string
// 3.

// Create a function that determines if a string contains a number (STAT1C contains a number, NONUMBER does not contain a number)

function containsNumber(string) {
  let answer = 'No it doesn`t';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(Number.parseInt(string[i]))) {
      answer = 'yes';
    }
  } return answer
}
// console.log(containsNumber('static'))

// 4.

// Create a function that returns how many characters are in a string without using `strlen()``
function lengthCounter(string) {
  let i = 0;
  for (str in string) {
    i++
  }
  return i
}
// console.log(lengthCounter('alma'))

// 5.

// Create a function that takes two arrays of integers and decides if their content is the same

function sameSame(arr1, arr2) {
  let checker = {};
  let counter = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] in checker) {
      checker[arr1[i]]++;
    } else {
      checker[arr1[i]] = 1
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] in checker) {
      counter++;
    }
  } if (counter === arr1.length) {
    return true
  } else {
    return false
  }
}
// console.log(sameSame([1,2,3],[1,2,3]))
// console.log(sameSame([1,3],[1,2]))

// 6.

// Create a function that takes an array of floats and returns with the average of the smallest and the highest value
function sumSmallLarge(array) {
  let min = 100;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
    if (array[i] < min) {
      min = array[i]
    }
  } return min + max
}
// console.log(sumSmallLarge([1,2,3,4,5,6]))
// 7.

// Create a function that takes a string and a letter, than returns the count of occurrence of that letter in the string

let countTheString = (string, letter) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  } return counter
}
// console.log(countTheString('alma','a'))
// 8.

// Create a function that takes two arrays and mixes them into a third one like this: [1, 2, 3] and [6, 7, 8] becomes [1, 6, 2, 7, 3, 8] (order does not matter)
// 9.

// Create a function that takes a string and changes every uppercase letters to lowercase letters
function lowerCaseto(string) {
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < uppercase.length; j++) {
      if (string[i] === uppercase[j]) {
        answer += lowercase[j];
      }
      if (string[i] === lowercase[j]) {
        answer += lowercase[j];
      }
    }
  } return answer
}

// console.log(lowerCaseto('Alma'))


// 10.

// Create a function that takes an array of integers and returns the average of the even numbers from that array
// 11.

// Create a function that takes two strings and decides if one is anagram of the other
// 12.

// Create a function that takes two arrays of integers and returns with the average of the sum of each array
// 13.

// Create a function that takes an array of integers and returns with the nearest integer in the array compared to the average of the array.
// 14.

// Create a function that takes an array of float and returns the second biggest element from it
// 15.

// Create a function that takes an array of floats and multiplies each element with the average of the array.
// 16.

// Create a function that takes a string and two letters. The function should change every first letter to the second letter in the string.
// 17,

// Create a function that takes an array and a number and shifts the values of the array by the given number like: [1, 2, 3, 4, 5] and 2 becomes [4, 5, 1, 2, 3]
// 18.

// Create a function that takes two strings and returns the first common character

