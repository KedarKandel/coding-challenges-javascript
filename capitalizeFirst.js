// Write a function that accepts a string and capitalize the first letter of each words in the string.

// function capitalize(str) {
//   const words = str.split(" ");
//   const result = [];
//   let startIndex = 0;

//   while (startIndex < words.length) {
//     let curWord = words[startIndex];
//     let capitalWord = curWord.charAt(0).toUpperCase() + curWord.slice(1);
//     result.push(capitalWord);
//     startIndex += 1;
//   }
//   return result.join(" ");
// }

// the

function capitalizeStr(str) {
  const words = str.split(" ");
  const result = new Array(words.length);
  for (let word of words) {
    let capLtr = word[0].toUpperCase();
    let capWord = "";
    let remainingLetters = "";
    for (let i = 1; i < word.length; i++) {
      remainingLetters += word[i];
    }
    capWord = capLtr + remainingLetters;
    result.push(capWord);
  }
  return result.join(" ");
}

console.log(capitalizeStr("the quick brown fox jumps over the lazy dog"));
