function curry(a) {
  return function curry(b) {
    return function curry(c) {
      const sum = a + b + c;
      return sum;
    };
  };
}

const sum = (num1) => {
  return (num2) => {
    const mult = num1 * num2;
    return (num3) => {
      return mult * num3;
    };
  };
};
// console.log(curry(2)(3)(4));
// console.log(sum(2)(3)(4));

// recursion

// function factorial(n) {
//   return n === 0 ? 1 : n * factorial(n - 1);
// }

// Example usage:
// console.log(factorial(5)); // Output: 120

// greet() // Output: Hello, world!
// console.log(greet())//output:  undefined

// function greet() {
//   console.log("Hello, world!");
// }

