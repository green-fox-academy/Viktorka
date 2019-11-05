// function getTotalX(a, b) {
//   let validCount = 0;

//   for (let x = 1; x <= 100; x++) {
//       if (a.every(int => (x % int == 0))) {
//           if (b.every(int => (int % x == 0))) {
//               validCount++;
//           }
//       }
//   }

//   return validCount;
// }

// console.log(getTotalX([2,4],[4,8,16]))

// NOT DONE YET
// function dayOfProgrammer(year) {
//   if (year > 1918 && year % 4 === 0 || (year < 1918 && year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
//     return `12.09.${year}`
//   } else if (year === 1918) {
//     return `26.09.1918`
//   } else {
//     return `13.09.${year}`
//   }
// }

// console.log(dayOfProgrammer(1800))

// function countingValleys(n, s) {
//   let seaLevel = 0;
//   let valley = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'U') {
//       seaLevel += 1;
//     } else {
//       seaLevel -= 1;
//     }
//     if (s[i] === 'U' && seaLevel === 0){
//       valley += 1;
//     }
//  } return valley
// }

// console.log(countingValleys(8,['U','D','D','D','U','D','U','U']))

// let kb = [40, 50, 60];
// let usb = [5, 8, 12];
// let b = 60;


// function getMoneySpent(keyboards, drives, b) {
//   var best = -1

//   keyboards.sort((a, b) => b - a)
//   drives.sort((a, b) => a - b)

//   for (var i = 0, j = 0; i < keyboards.length; i += 1){
//       for (; j < drives.length; j += 1){
//           let combined = keyboards[i] + drives[j]
//           if (combined > b) break //need to break so j would not increase
//           combined > best ? best = combined : null
//       }
//   }

//   return best
// }

// console.log(getMoneySpent(kb, usb, b))
// console.log(kb.sort().reverse())

// function asd(x) {
//   x > 18 ? console.log('over 18') : console.log('nono')
// }
// asd(23)
// function catAndMouse(x, y, z) {
//   if (Math.abs(y - z) > Math.abs(x - z)) {
//     return `Cat A`
//   } else if (Math.abs(y - z) < Math.abs(x - z)){
//     return `Cat B`
//   } else if (Math.abs(y - z) === Math.abs(x - z)){
//     return `Mouse C`
//   }
// }

// console.log(catAndMouse(2,5,4))
// console.log(catAndMouse(1,2,3))
// console.log(catAndMouse(1,3,2))


// function list(names) {
//   let answer = '';
//   for (let i = 0; i < names.length; i++) {
//     if (i < names.length - 2) {
//       answer += names[i].name + ', '
//     } else if (i === names.length - 2) {
//       answer += names[i].name + ' & '
//     } else if (i === names.length - 1) {
//       answer += names[i].name
//     }
//   } return answer
// }
// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))


// function generateHashtag(str) {
//   let splittedStr = str.split(' ');
//   let answer = '#'
//   if (str.length > 139) {
//     answer = false;
//   } else if (str.length === 0) {
//     answer = false;
//   } else {
//     for (let i = 0; i < splittedStr.length; i++) {
//       answer += splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
//     }
//   }
//   return answer
// }

// console.log(generateHashtag('asd asd'))

// function pageCount(n, p) {
//   let openCounter = 0;
//   if ((n-p) < (0+p)) {
//     openCounter += n-1-p;
//   } else {
//     openCounter += -1+p;
//   }
//   return openCounter;
// }
// function pageCount(n, p) {
//   /*
//     n: the number of pages in the book
//     p: the page number to turn to
//   */

//   const pageTurns = Math.floor(p / 2);
//   const totalTurns = Math.floor(n / 2);

//   /* Returns the total number of page turns it takes to get
//   to a page or how many it requires if starting from the back */

//   return Math.min(pageTurns, totalTurns - pageTurns);
// }
// console.log(pageCount(6,2))

// function utopianTree(n) {
//   let answer = 1;
//   for (let i = 1; i <= n; i++) {
//     if(i%2===0){
//       answer += 1
//     } else {
//       answer = answer*2
//     }
// }
// return answer;
// }

// console.log(utopianTree(1))
// console.log(utopianTree(2))
// console.log(utopianTree(3))
// console.log(utopianTree(5))

// function repeatedString(s, n) {
//   let answer = '';
//   let counter = 0;
//   for (let i = 0; i < n; i++) {
//     answer += s
//   }
//   for (let j = 0; j < answer.length; j++) {
//     if (answer[j]==='a'){
//       counter++
//     }
//   } return counter
// }


// function rotLeft(a, d) {
//   let answer = [];
//   for (let i = b; i < a.length; i++) {
//     answer.push(a[i]);
//   }
//   for (let j = 0; j < b; j++) {
//     answer.push(a[j]);
//   } return answer
// }

function reverseArray(a) {
  let answer = '';
  for (let i=a.length-1; i>=0; i--){
      answer+= `${a[i]} `
  }return answer
}

console.log(reverseArray([1,2,3]))