// Write a function that checks if the provided strings are  anagrams of each other.
// One string is an anagrams of another if it uses the same characters with same frequency.
// anagrams("RAIL!", "SAFETY!"), ("fairy","tales")==>true
// anagrams("hi","there"),("bye","there") ==> false

function charMapFunc(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const charMap = {};
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  return charMap;
}

const isAnagrams = (strA, strB) => {
  const mapA = charMapFunc(strA);
  const mapB = charMapFunc(strB);
  

  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) return false;
  }
  return true;
};

console.log(isAnagrams("RAIL! SAFETY!", "fairy tales"));
