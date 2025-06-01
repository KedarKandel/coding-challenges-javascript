// Find the length of the longest substring without repeating the characters.
// input: abcabcbb ---->abc with the length 3
// bbbbb----> b with the length 1
// pwwkew ---->wke with the length 3

const lengthOfLongest = (S) => {
  // create a hashmap
  // loop thorough the chars
  // create an index pointer
  // add char to hash
  // if chat already exists, increase index by 1

  let longest = 0;
  let count = 0;
  let obj = {};

  for (let char of S) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }

  console.log(obj);
};

lengthOfLongest("abcabcbb");
//console.log(lengthOfLongest("bbbbbb"))
//console.log(lengthOfLongest("pwwkew"))
