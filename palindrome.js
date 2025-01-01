// Given a string, return true if the given string is a palindrome and vice versa.

// e.g racecar = true
// eg name = false

// const isPalindrome = (str) => {
//   let s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reversed = "";

//   for (let char of s) {
//     reversed = char + reversed;
//   }

//   return s === reversed ? true : false;
// };

const isPalindrome = (s) => {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("RACE CAR"));
console.log(isPalindrome("nAme"));
