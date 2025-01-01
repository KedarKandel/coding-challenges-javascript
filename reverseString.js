// reverse a given string

function reverse(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
// console.log(reverse("Hi"));

// Given an integer, return an integer that is the reverse ordering of integer.

function reverseInt(num) {
  if (num === 0) return 0;

  let reversed = "";

  for (let n of String(Math.abs(num))) {
    reversed = n + reversed;
  }
  return num < 0 ? -reversed : reversed;
}

console.log(reverseInt(-891));
