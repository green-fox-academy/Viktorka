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


function persistence(num) {
  //code me
  let counter = 0;
  for (let i = 9; i > 0; i--) {
    if (num % i === 0) {
      counter++;
      break
    } 
    persistence(num / i)
  } return counter

}

console.log(persistence(155))

//TODO
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