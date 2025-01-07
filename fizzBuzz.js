// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    //1. if else
    // if (i % 3 === 0 && i % 5 === 0) {
    //   answer.push("FizzBuzz");
    // } else if (i % 3 === 0) {
    //   answer.push("Fizz");
    // } else if (i % 5 === 0) {
    //   answer.push("Buzz");
    // } else {
    //   answer.push(i);
    // }
    // 2. ternary
    // i % 3 === 0 && i % 5 === 0
    //   ? answer.push("FizzBuzz")
    //   : i % 3 === 0
    //   ? answer.push("Fizz")
    //   : i % 5 === 0
    //   ? answer.push("Buzz")
    //   : answer.push(i);

    // 3.
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    answer.push(str || i);
  }

  return answer;
};

console.log(fizzBuzz(15));
