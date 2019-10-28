// 'use strict'
// // is isogram => one letter only appear once
// // function isIsogram(str) {
// //   //...
// //   let checker = true
// //   let splittedStr = str.toLowerCase().split('').sort();
// //   for (let i = 0; i < splittedStr.length; i++) {
// //     if (splittedStr[i] === splittedStr[i + 1]) {
// //       checker = false;
// //     }
// //   }
// //   return checker;
// // }
// // console.log(isIsogram('asad'))
// // A = [1, 1, 1, 3]
// // B = [2, 2, 1]

// // function findOdd(A) {
// //   return 0;
// // }

// // Same ammount of x and o in a string
// // function XO(str) {
// //   let strArr= str.toLowerCase().split('');
// //   let xCounter = 0;
// //   let yCounter =0;
// //   for (let i=0; i< strArr.length; i++){
// //     if (strArr[i]==='x'){
// //       xCounter++
// //     } else if ( strArr[i]==='o'){
// //       yCounter++
// //     }
// //   } if (xCounter===yCounter){
// //     return true
// //   } else {
// //     return false
// //   }
// // }

// // VALIDATE PIN => 4 or 6 DIGIT NUMBERS ONLY
// // function validatePIN(pin) {
// //   if (isNaN(Number.parseInt(pin)) || Number.parseInt(pin) < 0) {
// //     return false
// //   } else {
// //     let check = pin.split('').sort();
// //     console.log(check)
// //     for (let i = 0; i < check.length; i++) {
// //       if (!isNaN(Number.parseInt(check[i]))) {
// //         return false
// //       }
// //     }
// //     if (check.length === 4 || check.length === 6) {
// //       return true
// //     } else {
// //       return false
// //     }
// //   }
// // }
// // console.log(validatePIN('3333'))

// // function nbYear(p0, percent, aug, p) {
// //   let counter = 0
// //   while (p>p0){
// //     p0+=p0*percent/100+aug
// //     counter++
// //   }
// //   return counter
// // }

// // function createPhoneNumber(numbers){
// //   var format = "(xxx) xxx-xxxx";

// //   for(var i = 0; i < numbers.length; i++)
// //   {
// //     format = format.replace('x', numbers[i]);
// //   }

// //   return format;
// // }
// // // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// // // }
// // let asd = [1,2,3,4,5,6,7,8,9,0]
// // console.log(createPhoneNumber(asd))


// // function divisors(integer) {
// //   let answer = [];
// //   // let prime = ''
// //   for (let i = 2; i <= integer; i++) {
// //     if (integer % i === 0 && i !== integer) {
// //       answer.push(i);
// //     } else if (i === integer && integer % i !== 0) {

// //     }
// //   } if (answer.length === 0) {
// //     return `${integer} is prime`
// //   } else {
// //     return answer
// //   }
// // }
// // console.log(divisors(14))


// // console.log(Number(16).toString(2))

// // var countBits = function (n) {
// //   // Program Me
// //   let binNum = Number(n).toString(2).split('');
// //   let counter = 0;
// //   binNum.forEach(e => {
// //     if (e==='1'){
// //       counter++
// //     }
// //   })


// //   return counter
// // };

// // move zeros from array to the end
// // var moveZeros = function (arr) {
// //   let arr1 = [];
// //   let counter = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //       arr1.push(arr[i]);
// //     } else {
// //       counter++
// //     }
// //   }
// //   console.log(counter)
// //   for (let j = 0; j < counter; j++) {
// //     arr1.push(0);
// //   }
// //   return arr1
// // }


// // var moveZeros = function (arr) {
// //   let arr1 = [];
// //   let counter = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //       arr1.push(arr[i]);
// //     } else {
// //       counter++
// //     }
// //   }
// //   console.log(counter)
// //   for (let j = 0; j < counter; j++) {
// //     arr1.push(0);
// //   }
// //   return arr1
// // }


// // how many times can see the ball from h tall drop with bounce (between 0-1(like 0.66)) from the window that is less than h tall.
// // function bouncingBall(h, bounce, window) {
// //   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
// //     if (h > window) {
// //       h = h * bounce
// //     }
// //     if (h < window) {
// //       return 1;
// //     } else {
// //       return 2 + bouncingBall(h, bounce, window);
// //     }
// //   } else {
// //     return -1
// //   }
// // }

// // if str is even pair them str[0]str[1], str[2]str[3] if odd str[0]str[1], str[2]_
// // function solution(str) {
// //   let arr = str.split('');
// //   let arr1 = []
// //   for (let i = 0; i < arr.length; i = i + 2) {
// //     if (arr[i + 1] === undefined) {
// //       arr1.push(arr[i] + '_')
// //     } else
// //       arr1.push(arr[i] + arr[i + 1])
// //   } return arr1
// // }
// // console.log(solution('abc'))

// // 
// // function deleteNth(arr, n) {
// //   // ...
// //   let countObj = {}
// //   let arr1 = []
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] in countObj) {
// //       countObj[arr[i]]++;
// //     } else {
// //       countObj[arr[i]] = 1;
// //     }
// //     if (countObj[arr[i]] <= n) {
// //       arr1.push(arr[i]);
// //     } else {

// //     }
// //   }
// //   return arr1
// // }
// // console.log(deleteNth([1, 2, 3, 1, 2, 2], 1))

// //not ok
// // function persistence(num) {
// //   //code me
// //   let counter = 0;
// //   for (let i = 9; i > 0; i--) {
// //     if (num % i === 0) {
// //       counter++;
// //       break
// //     } 
// //     persistence(num / i)
// //   } return counter

// // }

// // console.log(persistence(155))

// //TODO not ok
// // function isPrime(num) {
// //   if (num === 1) {
// //     return false;
// //   }
// //   let arr = [];
// //   for (let i = 2; i <= num; i++) {
// //     if (num % i === 0) {
// //       arr.push[i];
// //     }
// //     console.log(arr)
// //     if (arr.length > 0) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// // }
// // console.log(isPrime(4))



// // function staircase(x) {
// //   let a = ' ';
// //   for (let i = 1; i <= x; i++) {
// //     console.log(a.repeat(x - i) + '#'.repeat(i));
// //   }
// // }


// // staircase(4)
// let array1 = [1, 3, 2, 3]

// // function miniMaxSum(arr) {
// //   let sum1 = 0;
// //   let sum2 = 0;
// //   let newArr = arr.sort();
// //   for (let i = 1; i < newArr.length; i++) {
// //     sum2 += newArr[i]
// //   }
// //   for (let i = 0; i < newArr.length - 1; i++) {
// //     sum1 += newArr[i]
// //   }
// //   console.log(sum1, sum2)
// // }

// // miniMaxSum(array1)

// let time = '12:45:45AM'
// let time2 = '11:59:12PM'

// // function timeConversion(s) {
// //   let s2 = s.split('');
// //   if (s2[8] === 'P' && (s2[1] !== '1' || s2[0] !== '2')) {
// //     return `${Number.parseInt(s2[1]) + 12}${s2[2]}${s2[3]}${s2[4]}${s2[5]}${s2[6]}${s2[7]}`
// //   } else {
// //     return `${0}${Number.parseInt(s2[1])-2}${s2[2]}${s2[3]}${s2[4]}${s2[5]}${s2[6]}${s2[7]}`
// //   }
// // }
// //   let answer = '';
// //   let s2 = s.split(':');
// //   let s4 = s.slice(0, 8).split(':');
// //   console.log(s2)
// //   let s3 = s2[2].split('')
// //   if (s3[2] === 'P' && Number.parseInt(s2[0]) < 12) {
// //     answer += `${Number.parseInt(s4[0]) + 12}:${s4[1]}:${s4[2]}`;
// //   } else if (s3[2] === 'A' && Number.parseInt(s2[0]) < 12) {
// //     answer += `${s4[0]}:${s4[1]}:${s4[2]}`
// //   } else if (s3[2]==='P' && Number.parseInt(s2[0])===12){
// //     answer += `12:${s4[1]}:${s4[2]}`
// //   } else if (s3[2]==='A' && Number.parseInt(s2[0])===12){
// //     answer += `00:${s4[1]}:${s4[2]}`
// //   }


// //   console.log(answer)
// // }
// // timeConversion(time)
// // // console.log(timeConversion(time2))

// /*
//  * Complete the 'gradingStudents' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY grades as parameter.
//  */

// // let arrr = [4, 73, 67, 38, 33]

// // function gradingStudents(grades) {
// //   // Write your code here
// //   let annsw = []
// //   for (let i = 1; i < grades.length; i++) {
// //     if (grades[i] > 37 && (grades[i] + 1) % 5 === 0) {
// //       annsw.push(grades[i]+1);
// //     } else if (grades[i] > 37 && (grades[i] + 2) % 5 === 0){
// //       annsw.push(grades[i]+2);
// //     } else if (grades[i]<= 37){
// //       annsw.push(grades[i])
// //     } else {
// //       annsw.push(grades[i])
// //     }
// //   } return annsw
// // }

// // console.log(gradingStudents(arrr))

// // let sc = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

// // function breakingRecords(scores) {
// //   let highest = scores[0];
// //   let lowest = scores[0];
// //   let highestC = 0;
// //   let lowestC = 0;
// //   for (let i = 1; i < scores.length; i++) {
// //     if (scores[i] > highest) {
// //       highest = scores[i]
// //       highestC++
// //     } else if (scores[i] < lowest) {
// //       lowest = scores[i]
// //       lowestC++
// //     }
// //   }
// //   return [highestC,lowestC]
// // }

// // console.log(breakingRecords(sc))

// // let billl = [3, 10, 2, 9]


// // function bonAppetit(bill, k, b) {
// //   const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
// //   annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
// // }

// // bonAppetit(billl, 1,12)

// // billl[2]===2? console.log('yes'): console.log('no');

// // let sox = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// // function sockMerchant(n, ar) {
// //   ar.sort();
// //   let pairs = []
// //   for (let i = 0; i < n; i++) {
// //       if (ar[i] === ar[i + 1]) {
// //         pairs.push(ar[i]);
// //         pairs.push(ar[i + 1])
// //         ar.splice(i, 1);
// //         n--;
// //       }
// //   }
// //   console.log(ar,pairs,pairs.length/2)
// // }

// // sockMerchant(9, sox)

// // let s = ["UDDDUDUU"]

// // function countingValleys(n, s) {
// //   let counterU = 0;
// //   let counterD = 0;
// //   let as = s.split('')
// //   console.log(as)
// //   for (let i = 0; i < n; i++) {

// //   }

// // }

// // countingValleys(8, s)
// // let p = [5, 2, 1, 3, 4]

// // function permutationEquation(p) {
// //   let answerArray = []
// //   for (let i = 1; i <= p.length; i++) {
// //     answerArray.push(p.indexOf(p.indexOf(i)+1)+1)
// //   }
// //   return answerArray
// // }

// // console.log(permutationEquation(p))

// // let c = [0, 0, 1, 0, 0, 1, 0]
// // let c1 = [0, 0, 0, 1, 0, 0]
// // // let c2 = [0, 0, 0, 0, 1, 0]
// // function jumpingOnClouds(c) {
// //   let counter = 0;
// //   for (let i = 0; i < c.length - 1; i++) {
// //     if (c[i + 2] === 0) {
// //       counter++
// //       i++
// //       console.log(`c${counter}`,i,2)
// //     } else if (c[i + 1] === 0) {
// //       counter++
// //       // i = i + 1
// //       console.log(`c${counter}`,i,1)
// //     }
// //   }
// //   console.log(counter)
// // }

// // jumpingOnClouds(c)
// // jumpingOnClouds(c1)
// // jumpingOnClouds(c2)

// // const jumpingOnClouds2 = (c) => {
// //   let jumps = 0
// //   let i = 0

// //   while (i < c.length) {

// //     if (c[i + 2] === 0) i += 2

// //     else i += 1

// //     if (i !== c.length) jumps++

// //     // This one makes you really understand what is happening
// //     console.log({ jumps, i })

// //   }

// //   return jumps
// // }

// // console.log(jumpingOnClouds2(c1))
// // let arr = [37,32,97,35,76, 62]

// // function equalizeArray(arr) {
// //   let answerArray = [];
// //   let item;
// //   let mostFrequent = 1;
// //   let checker = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //       if (arr[i] === arr[j]) {
// //         checker++;
// //       }
// //       if (mostFrequent < checker) {
// //         mostFrequent = checker;
// //         item = arr[i];
// //       }
// //     }
// //     checker = 0;
// //   }
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === item && item !== undefined) {
// //       answerArray.push(arr[i])
// //     }
// //     if (item === undefined) {
// //       answerArray = [1]
// //     }
// //   }

// //   return arr.length - answerArray.length
// // }

// // console.log(equalizeArray(arr))

// // function viralAdvertising(n) {

// //   let cumulative = 0;
// //   let shared = 5;
// //   let liked = 0;

// //   for (var i = 0; i < n; i++) {
// //           liked = Math.floor(shared / 2);
// //           cumulative += liked;
// //           shared = liked * 3;
// //   }

// //   return cumulative;

// // }

// // let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

// // function migratoryBirds(arr) {
// //   arr.sort()
// //   let mostFrequent = 1;
// //   let frequent = 0;
// //   let theMostFrequent;

// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //       if (arr[i] === arr[j]) {
// //         frequent++
// //       }
// //       if (mostFrequent < frequent) {
// //         mostFrequent = frequent;
// //         theMostFrequent = arr[i];
// //       }
// //     }
// //     frequent = 0;
// //   }
// //   return theMostFrequent;
// // }


// // let arr1 = [1, 1, 2, 1, 1, 2, 2, 3]
// // console.log(migratoryBirds(arr1));



// // function migratoryBirds(arr) {
// //   let birds = {}
// //   for (let i = 0; i < arr.length; i++) {
// //     if (birds[arr[i]] in birds === false) {
// //       birds[arr[i]] = 1
// //     } else {
// //       birds[i]++
// //     }
// //   }
// //   console.log(birds)
// //   for (let j = 0; j < birds.length; j++) {
// //     // console.log(birds[Object.keys(birds)[j]])
// //     console.log(birds)
// //   }
// // }

// // let asd = {1:1, 2:1,3:1,4:4}
// // console.log(asd[1])
// // migratoryBirds(arr1)

// reverse a string
function reverserString(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}
// let stra = "asd"
// console.log(reverserString("stra"))

// // palindrome checker
function palindrome(str) {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      checker++
    }
  }
  if (checker === str.length) {
    return true
  } else {
    return false
  }
}

// // console.log(palindrome("asd"))

// // sum all items in matrix
// // let m1 = [[1,2],[3,4]];

// // function sumMatrix(matrix){
// //   let sum = 0;
// //   for (let i=0; i<matrix.length;i++){
// //     for (let j=0;j<matrix.length;j++){
// //       sum += matrix[i][j]
// //     }
// //   }return sum
// // }

// // console.log(sumMatrix(m1))

// // 2 arrays if content is the same
// // function arrayChecker(arr1, arr2) {
// //   let checker = 0;
// //   if (arr1.length === arr2.length) {
// //     for (let i = 0; i < arr1.length; i++) {
// //       if (arr1[i]===arr2[i]){
// //         checker++
// //       }
// //     }
// //   } if (checker===arr1.length){
// //     return true
// //   } else {
// //     return false
// //   }
// // }

// // let arr1 = ["a", "b", "c"]
// // let arr2 = ["a", "b", "4"]

// // console.log(arrayChecker(arr1,arr2))

// // create a diagnal stuff in matrix
// // function ones(n) {
// //   let answer = []
// //   for (let i = 0; i < n; i++) {
// //     let answ_arr = []
// //     for (let j = 0; j < n; j++) {
// //       if (i === j) {
// //         answ_arr.push(1)
// //       } else {
// //         answ_arr.push(0)
// //       }
// //     }
// //    answer.push(answ_arr)
// //   }return answer
// // }

// // console.log(ones(5))

// // function stringLetter(string,letter){
// //   let answer = [];
// //   for (let i = 0; i<string.length;i++){
// //     if (string[i]===letter){
// //       answer.push(i);
// //     }
// //   }return answer
// // }

// // console.log(stringLetter('ananasz','a'))

// // function create one array from two with a1[1]a2[1]etc

// // function arrayMixer(arr1,arr2){
// //   let array=[]
// //   if (arr1.length===arr2.length){
// //     for (let i = 0; i<arr1.length;i++){
// //       array.push(arr1[i])
// //       array.push(arr2[i])
// //     }
// //   } return array
// // }
// // let a1=[1,2,3]
// // let a2=[4,5,6]

// // console.log(arrayMixer(a1,a2))

// // return biggest from every 2nd from array 
// // function every2nd(arr){
// //   let answer = 0;
// //   for (let i=1;i<arr.length;i+=2){
// //     if (arr[i]>answer){
// //       answer=arr[i]
// //     }
// //   } return answer
// // }
// // console.log(every2nd([1,5,3,4,5,3,7]))

// // every even nums average from array
// // const average = (arr) => {
// //   let even = [];
// //   let ave = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 === 0) {
// //       even.push(arr[i])
// //     }
// //   }
// //   // for (let j=0;j<even.length;j++){

// //   // }
// //   even.forEach(e => {
// //     ave += e
// //   })
// //   return ave/even.length
// // }

// // console.log(average([2,4,6,1,1,1,3]))

// // anagramm check
// // let anagramCheck = (str1,str2) => {
// //   return str1.split('').sort().join()===str2.split('').sort().join()
// // }
// function anagramm(str1, str2) {
//   // counter = 0;
//   let checkIt = {};
//   if (str1.length === str2.length) {
//     for (let i = 0; i < str1.length; i++) {
//       if (checkIt[str1[i]]) {
//         checkIt[str1[i]]++;
//       } else {
//         checkIt[str1[i]] = 1;
//       }
//     }
//     // console.log(checkIt)
//     for (let j = 0; j < str2.length; j++) {
//       if (checkIt[str2[j]]) {
//         checkIt[str2[j]]--;
//         if (checkIt[str2[j]] === 0) {
//           delete checkIt[str2[j]]
//         }
//         if (Object.keys(checkIt).length === 0) {
//           checkIt['yassqueen'] = 1;
//         }
//       }
//     }
//   } if (checkIt.yassqueen === 1) {
//     return true
//   } else {
//     return false
//   }
// }

// // console.log(anagramCheck('alma','ama'))

// // // returns sum of each row in matrix
// // let rowSum = (matrix) => {
// //   let answer = []
// //   let sum = 0
// //   for (let i = 0; i < matrix.length; i++) {
// //     for (let j = 0; j < matrix.length; j++) {
// //       if (j === matrix.length - 1) {
// //         sum += matrix[i][j]
// //         answer.push(sum)
// //         sum = 0
// //       } else {
// //         sum += matrix[i][j]
// //       }
// //     }
// //   }return answer
// // }

// // console.log(rowSum([[1,2,5],[3,4,5],[5,5,5]]))

// // let asd = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ];

// // function transformMatrix(array) {
// //   let answ = []
// //   for (let i = 0; i < array.length; i++) {
// //     let row = []
// //     for (let j = 0; j < array.length; j++) {
// //       row.push(array[j][i])
// //     }
// //     answ.push(row)
// //   } return answ
// // }
// // console.log(asd)
// // console.log(transformMatrix(asd))

// // let str = "a,bcd,e,fg"

// // function splitter(string, div) {
// //   let answer = [''];
// //   let counter = 0;
// //   for (let i = 0; i < string.length; i++) {
// //     if (string[i] === div) {
// //       answer.push('')
// //       counter++
// //     } else {
// //       answer[counter] += string[i]
// //     }
// //   } return answer
// // }


// // console.log(splitter(str, ","))

// // function twoChars(string){
// // let answer = [];
// // for (let i = 0; i < string.length; i+=2) {
// // answer.push(string[i]+string[(i+1)])
// // } return answer
// // }

// // console.log(twoChars('abcdefgh'))

// // function joiner(array,div){
// //   let answer = '';
// //   for (let i = 0; i < array.length; i++) {
// //     answer += array[i]+div 
// //   } return answer
// // }

// // console.log(joiner(["ab", "cde", "fg"], " "))

// // function shifter(array,number){
// //   let answer = [];
// //   for (let i = array.length-number; i < array.length; i++) {
// //     answer.push(array[i])
// //   }
// //   for (let j = 0; j < array.length-number; j++) {
// //     answer.push(array[j]);
// //   }
// // return answer
// // }
// // console.log(shifter([1,2,3,4,5],1))

// // function common(string1,string2){
// //   let str1=[];
// //   let str2=[];
// //   let answer = [];
// //   for (let i = 0; i < string1.length; i++) {
// //     str1.push(string1[i])
// //   }
// //   for (let i = 0; i < string2.length; i++) {
// //     str2.push(string2[i])
// //   }
// //   for (let i = 0; i < str1.length; i++) {
// //     for (let j = 0; j < str2.length; j++) {
// //       if (str1[i]===str2[j]){
// //         answer.push(str1[i])
// //       }
// //     }
// //   }
// //   return answer
// // }

// // console.log(common("string","strike"))

// // function nonDuplo(array) {
// //   let counting = {}
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] in counting) {
// //       counting[array[i]]++;
// //     } else {
// //       counting[array[i]] = 1;
// //     }
// //   } return Object.keys(counting)
// // }

// // console.log(nonDuplo([1, 1, 1, 2, 3, 4, 4, 5]))
// // console.log(nonDuplo([1, 2, 3, 4, 5, 5, 5, 4, 3, 2, 1]))

// // 2nd 
// // function notTheBiggest(array) {
// //   let biggest = 0;
// //   let secondB = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i]>biggest){
// //       biggest=array[i];
// //     }
// //   }
// //   for (let j = 0; j < array.length; j++) {
// //     if (array[j]>secondB && array[j]<biggest){
// //       secondB=array[j]
// //     }
// //   } return secondB
// // }

// // console.log(notTheBiggest([1,2,44,66,99999999,15,88764678]))

// // function onlyOneElem(array1, array2) {
// //   let answer = [];
// //   let notAnswer = [];
// //   for (let i = 0; i < array1.length; i++) {
// //     if (array1[i] in array2){
// //       notAnswer.push(array1[i])
// //     } else {
// //       answer.push(array1[i])
// //     } 
// //   } return answer
// // }

// // console.log(onlyOneElem([1,2,3],[2,4,1]))

// // function atLeastTwice(array) {
// //   let answer = [];
// //   let partial = [];
// //   let obj = {};

// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] in obj) {
// //       obj[array[i]]++;
// //     } else {
// //       obj[array[i]] = 1
// //     }
// //   }
// //   console.log(obj)
// //   for (let j = 0; j < array.length; j++) {
// //     if (obj[array[j]] >= 2) {
// //       partial.push(array[j])
// //       // obj[array[j]] = 0
// //     }
// //   }


// //   return partial
// // }

// // console.log(atLeastTwice([1, 1, 2, 3, 3, 4, 5, 5, 6, 6]))

// // 22 megoldas?
// // function filtering(arr){
// // 	let obj = {};
// // 	let arr2 = [];
// // 	let arr3 = [];

// // 	for (let i = 0 ; i < arr.length ; i++)
// // 		arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1;

// // 	for (let i = 0 ; i < arr.length ; i++)
// // 		if (obj[arr[i]] > 1 )
// // 			arr2.push(arr[i]);

// // 	for (let i = 0 ; i < arr2.length ; i++)
// // 		if (arr2.indexOf(arr2[i]) === i)
// // 			arr3.push(arr2[i]);

// // 	return arr3;
// // }

// // console.log(filtering([1,1,2,2,3,4,5,6,7,8,9,9]));

// // let words = "lleW ,enod taht saw ton taht drah";

// // function reverser(word) {
// //   let words = word.split(' ');
// //   let answer = '';
// //   for (let i = 0; i < words.length; i++) {
// //     answer += words[i].split('').reverse().join('') + ' '
// //   } return answer
// // }

// // console.log(reverser(words))