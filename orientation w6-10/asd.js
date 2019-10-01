'use strict'
// is isogram => one letter only appear once
// function isIsogram(str) {
//   //...
//   let checker = true
//   let splittedStr = str.toLowerCase().split('').sort();
//   for (let i = 0; i < splittedStr.length; i++) {
//     if (splittedStr[i] === splittedStr[i + 1]) {
//       checker = false;
//     }
//   }
//   return checker;
// }
// console.log(isIsogram('asad'))
// A = [1, 1, 1, 3]
// B = [2, 2, 1]

// function findOdd(A) {
//   return 0;
// }

// Same ammount of x and o in a string
// function XO(str) {
//   let strArr= str.toLowerCase().split('');
//   let xCounter = 0;
//   let yCounter =0;
//   for (let i=0; i< strArr.length; i++){
//     if (strArr[i]==='x'){
//       xCounter++
//     } else if ( strArr[i]==='o'){
//       yCounter++
//     }
//   } if (xCounter===yCounter){
//     return true
//   } else {
//     return false
//   }
// }

// VALIDATE PIN => 4 or 6 DIGIT NUMBERS ONLY
// function validatePIN(pin) {
//   if (isNaN(Number.parseInt(pin)) || Number.parseInt(pin) < 0) {
//     return false
//   } else {
//     let check = pin.split('').sort();
//     console.log(check)
//     for (let i = 0; i < check.length; i++) {
//       if (!isNaN(Number.parseInt(check[i]))) {
//         return false
//       }
//     }
//     if (check.length === 4 || check.length === 6) {
//       return true
//     } else {
//       return false
//     }
//   }
// }
// console.log(validatePIN('3333'))

// function nbYear(p0, percent, aug, p) {
//   let counter = 0
//   while (p>p0){
//     p0+=p0*percent/100+aug
//     counter++
//   }
//   return counter
// }

// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }
// // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// // }
// let asd = [1,2,3,4,5,6,7,8,9,0]
// console.log(createPhoneNumber(asd))


// function divisors(integer) {
//   let answer = [];
//   // let prime = ''
//   for (let i = 2; i <= integer; i++) {
//     if (integer % i === 0 && i !== integer) {
//       answer.push(i);
//     } else if (i === integer && integer % i !== 0) {

//     }
//   } if (answer.length === 0) {
//     return `${integer} is prime`
//   } else {
//     return answer
//   }
// }
// console.log(divisors(14))


// console.log(Number(16).toString(2))

// var countBits = function (n) {
//   // Program Me
//   let binNum = Number(n).toString(2).split('');
//   let counter = 0;
//   binNum.forEach(e => {
//     if (e==='1'){
//       counter++
//     }
//   })


//   return counter
// };

// move zeros from array to the end
// var moveZeros = function (arr) {
//   let arr1 = [];
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr1.push(arr[i]);
//     } else {
//       counter++
//     }
//   }
//   console.log(counter)
//   for (let j = 0; j < counter; j++) {
//     arr1.push(0);
//   }
//   return arr1
// }


// var moveZeros = function (arr) {
//   let arr1 = [];
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr1.push(arr[i]);
//     } else {
//       counter++
//     }
//   }
//   console.log(counter)
//   for (let j = 0; j < counter; j++) {
//     arr1.push(0);
//   }
//   return arr1
// }


// how many times can see the ball from h tall drop with bounce (between 0-1(like 0.66)) from the window that is less than h tall.
// function bouncingBall(h, bounce, window) {
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     if (h > window) {
//       h = h * bounce
//     }
//     if (h < window) {
//       return 1;
//     } else {
//       return 2 + bouncingBall(h, bounce, window);
//     }
//   } else {
//     return -1
//   }
// }

// if str is even pair them str[0]str[1], str[2]str[3] if odd str[0]str[1], str[2]_
// function solution(str) {
//   let arr = str.split('');
//   let arr1 = []
//   for (let i = 0; i < arr.length; i = i + 2) {
//     if (arr[i + 1] === undefined) {
//       arr1.push(arr[i] + '_')
//     } else
//       arr1.push(arr[i] + arr[i + 1])
//   } return arr1
// }
// console.log(solution('abc'))

// 
// function deleteNth(arr, n) {
//   // ...
//   let countObj = {}
//   let arr1 = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in countObj) {
//       countObj[arr[i]]++;
//     } else {
//       countObj[arr[i]] = 1;
//     }
//     if (countObj[arr[i]] <= n) {
//       arr1.push(arr[i]);
//     } else {

//     }
//   }
//   return arr1
// }
// console.log(deleteNth([1, 2, 3, 1, 2, 2], 1))

//not ok
// function persistence(num) {
//   //code me
//   let counter = 0;
//   for (let i = 9; i > 0; i--) {
//     if (num % i === 0) {
//       counter++;
//       break
//     } 
//     persistence(num / i)
//   } return counter

// }

// console.log(persistence(155))

//TODO not ok
// function isPrime(num) {
//   if (num === 1) {
//     return false;
//   }
//   let arr = [];
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       arr.push[i];
//     }
//     console.log(arr)
//     if (arr.length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(isPrime(4))



// function staircase(x) {
//   let a = ' ';
//   for (let i = 1; i <= x; i++) {
//     console.log(a.repeat(x - i) + '#'.repeat(i));
//   }
// }


// staircase(4)
let array1 = [1, 3, 2, 3]

// function miniMaxSum(arr) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let newArr = arr.sort();
//   for (let i = 1; i < newArr.length; i++) {
//     sum2 += newArr[i]
//   }
//   for (let i = 0; i < newArr.length - 1; i++) {
//     sum1 += newArr[i]
//   }
//   console.log(sum1, sum2)
// }

// miniMaxSum(array1)

let time = '12:45:45AM'
let time2 = '11:59:12PM'

// function timeConversion(s) {
//   let s2 = s.split('');
//   if (s2[8] === 'P' && (s2[1] !== '1' || s2[0] !== '2')) {
//     return `${Number.parseInt(s2[1]) + 12}${s2[2]}${s2[3]}${s2[4]}${s2[5]}${s2[6]}${s2[7]}`
//   } else {
//     return `${0}${Number.parseInt(s2[1])-2}${s2[2]}${s2[3]}${s2[4]}${s2[5]}${s2[6]}${s2[7]}`
//   }
// }
//   let answer = '';
//   let s2 = s.split(':');
//   let s4 = s.slice(0, 8).split(':');
//   console.log(s2)
//   let s3 = s2[2].split('')
//   if (s3[2] === 'P' && Number.parseInt(s2[0]) < 12) {
//     answer += `${Number.parseInt(s4[0]) + 12}:${s4[1]}:${s4[2]}`;
//   } else if (s3[2] === 'A' && Number.parseInt(s2[0]) < 12) {
//     answer += `${s4[0]}:${s4[1]}:${s4[2]}`
//   } else if (s3[2]==='P' && Number.parseInt(s2[0])===12){
//     answer += `12:${s4[1]}:${s4[2]}`
//   } else if (s3[2]==='A' && Number.parseInt(s2[0])===12){
//     answer += `00:${s4[1]}:${s4[2]}`
//   }


//   console.log(answer)
// }
// timeConversion(time)
// // console.log(timeConversion(time2))

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// let arrr = [4, 73, 67, 38, 33]

// function gradingStudents(grades) {
//   // Write your code here
//   let annsw = []
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > 37 && (grades[i] + 1) % 5 === 0) {
//       annsw.push(grades[i]+1);
//     } else if (grades[i] > 37 && (grades[i] + 2) % 5 === 0){
//       annsw.push(grades[i]+2);
//     } else if (grades[i]<= 37){
//       annsw.push(grades[i])
//     } else {
//       annsw.push(grades[i])
//     }
//   } return annsw
// }

// console.log(gradingStudents(arrr))

// let sc = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

// function breakingRecords(scores) {
//   let highest = scores[0];
//   let lowest = scores[0];
//   let highestC = 0;
//   let lowestC = 0;
//   for (let i = 1; i < scores.length; i++) {
//     if (scores[i] > highest) {
//       highest = scores[i]
//       highestC++
//     } else if (scores[i] < lowest) {
//       lowest = scores[i]
//       lowestC++
//     }
//   }
//   return [highestC,lowestC]
// }

// console.log(breakingRecords(sc))

// let billl = [3, 10, 2, 9]


// function bonAppetit(bill, k, b) {
//   const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
//   annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
// }

// bonAppetit(billl, 1,12)

// billl[2]===2? console.log('yes'): console.log('no');

let sox = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
  ar.sort();
  let pairs = []
  for (let i = 0; i < n; i++) {
      if (ar[i] === ar[i + 1]) {
        pairs.push(ar[i]);
        pairs.push(ar[i + 1])
        ar.splice(i, 1);
        n--;
      }
  }
  console.log(ar,pairs,pairs.length/2)
}

sockMerchant(9, sox)

// let s = ["UDDDUDUU"]

// function countingValleys(n, s) {
//   let counterU = 0;
//   let counterD = 0;
//   let as = s.split('')
//   console.log(as)
//   for (let i = 0; i < n; i++) {

//   }

// }

// countingValleys(8, s)