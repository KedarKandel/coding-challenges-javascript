// Given an array and chunck size, divide the array into many sub arrays where each subarray is of length size.

// Example
// chunk([1,2,3,4,5,6],2) ==> [[1,2],[3,4],[5,6]]

const chunkArray = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    for (j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    result.push(chunk);
  }

  return result;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));

function makeChunk(arr, size) {
  const res = [];
  let startIndex = 0;

  while (startIndex < arr.length) {
    let chunk = arr.slice(startIndex, startIndex + size);
    res.push(chunk);
    startIndex += size;
  }
  return res;
}
// console.log(makeChunk([1, 2, 3, 4, 5, 6], 2));
