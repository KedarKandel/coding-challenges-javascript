// Write a function that accepts and returns NxN spiral matrix.

function spiralMatrix(n) {
  const result = [];
  let counter = 1,
    startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

while(startRow<=endRow && startCol<=endCol){
      // top
  for (let i = startCol; i <= endCol; i++) {
    result[startRow][i] = counter;
    counter++;
  }
  startRow++;

  //right
  for (let i = startRow; i <= endRow; i++) {
    result[i][endCol] = counter;
    counter++;
  }
  endCol--;

  //bottom

  for (let i = endCol; i >= startCol; i--) {
    result[endRow][i] = counter;
    counter++;
  }
  endRow--;

  // left

  for (let i = endRow; i >= startRow; i--) {
    result[i][startCol] = counter;
    counter++;
  }
  startCol++;
}

  console.log(result);
}
spiralMatrix(4);
