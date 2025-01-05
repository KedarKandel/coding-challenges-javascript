// Given a string, return the most commonly used character. If there are more than one characters with equal frequencies, return all of them.

// keddddaarr = d ==>3
//keddrrss= d,r,s

function maxChar(s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let charObj = {};

  for (let char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
  }

  let maxCount = 0;
  const result = [];

  // for(let key in charObj){}

  for (const [key, value] of Object.entries(charObj)) {
    if (value > maxCount) {
      maxCount = value;
      result.length = 0;
      result.push(key);
    } else if (value === maxCount) {
      result.push(key);
    }
  }

  return result.length === 1 ? result[0] : result;
}

console.log(maxChar("keddrrss 33334545455555555"));
