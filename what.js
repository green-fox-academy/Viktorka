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