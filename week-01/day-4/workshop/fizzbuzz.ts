let a: boolean;
let b: boolean;
let i: number;
let output: string;

for (i = 1; i <= 100; i += 1) {
  output = '';
  a = !(i % 3);
  b = !(i % 5);

  if (a) output += 'Fizz';
  if (b) output += 'Buzz';

  // Converts to a string because output is defined as such
  if (!(a || b)) output = i.toString();

  console.log(output);
}