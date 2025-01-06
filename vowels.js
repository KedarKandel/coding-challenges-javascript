// Write a function that returns the number of vowels used in a string.
// Umbrella Kedar = "u","e","e","a","a" =>5

function countVowel(str) {
//   const matches = str.match(/[aeiou]/gi, "");
//   return matches ? matches.length : 0;

  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const res = [];
  const vow = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vow.includes(char)) {
      res.push(char);
    }
  }

  return res.length;
}

console.log(countVowel("UmbrElla Kedar"));
