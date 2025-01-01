// Given a string, return the most commonly used character.

// keddddaarr = d ==>3

function maxChar(s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let obj = {};

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  let maxCount = 0;
  let maxChar = "";
  for (let key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("kedddddrr"));
