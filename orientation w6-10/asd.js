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


function divisors(integer) {
  let answer = [];
  // let prime = ''
  for (let i = 2; i <= integer; i++) {
    if (integer % i === 0 && i !== integer) {
      answer.push(i);
    } else if (i === integer && integer % i !== 0) {

    }
  } if (answer.length === 0) {
    return `${integer} is prime`
  } else {
    return answer
  }
}
console.log(divisors(14))
