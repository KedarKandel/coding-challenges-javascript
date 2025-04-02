//Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

const mergerKLists = (lists) => {
  const result = [];
  for (let i = 0; i < lists.length; i++) {
    let current = lists[i];
    if (Array.isArray(current)) {
      for (let j = 0; j < current.length; j++) {
        result.push(current[j]);
      }
    } else {
      result.push(lists[i]);
    }
  }

  let answer = result.sort();

  return answer;
};

lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
// lists = [[]]
//lists = [];
console.log(mergerKLists(lists));
