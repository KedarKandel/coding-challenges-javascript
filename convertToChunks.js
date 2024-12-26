//  convert the given strings into chunks of equal sizes possible. for example given a string
//  str = "A quick brown fox jumps over the lazy dog"

// function(str, 10) should return ["A quick", "brown fox", "jumps over", "the lazy", "dog"]
//  function should take the string and a constant which will determine the maximum length of the chunk. The space between the words should be as usual.
//  if function("helloWorld", 4), function should return helloworld because you cannot split the word.


// method 1
const msg1 = "A quick brown fox jumps over the lazy dog";

const convertToChunks = (msg1, n) => {
  const words = msg.split(" ");
  const chunks = [];
  let cur_chunk = "";
  for (let i = 0; i < words.length; i++) {
    if (cur_chunk.length + words[i].length + 1 <= n) {
      cur_chunk = cur_chunk + (cur_chunk ? " " : "") + words[i];
    } else {
      chunks.push(cur_chunk);
      cur_chunk = words[i];
    }
  }
  if (cur_chunk) {
    chunks.push(cur_chunk);
  }

  return chunks;
};

// console.log(convertToChunks(msg1, 10));




// 2. Method 2 using recusrion

const msg = "A quick brown fox jumps over the lazy dog";

const convertToChunksDFS = (msg, n, currentChunk = "", chunks = []) => {
  if (msg === "") {
    if (currentChunk) {
      chunks.push(currentChunk); // Add the last remaining chunk
    }
    return chunks;
  }

  const words = msg.split(" ");
  const [firstWord, ...remainingWords] = words;

  if (currentChunk.length + firstWord.length + 1 <= n) {
    // If adding the first word doesn't exceed the limit
    return convertToChunksDFS(
      remainingWords.join(" "),
      n,
      currentChunk + (currentChunk ? " " : "") + firstWord,
      chunks
    );
  } else {
    // If adding the first word exceeds the limit, add the current chunk
    chunks.push(currentChunk);
    return convertToChunksDFS(remainingWords.join(" "), n, firstWord, chunks);
  }
};

console.log(convertToChunksDFS(msg, 10));
