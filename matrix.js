// Write a function that accepts and returns NxN spiral matrix.

function spiralMatrix(n) {
  const result = [];
  let counter = 10,
    startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    // top
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++; // this is the beginning point of matrix for another for-loop

    //right
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--; // this is the beginning point of matrix for another for-loop

    //bottom

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--; // this is the beginning point of matrix for another for-loop

    // left

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++; // this is the beginning point of matrix for another for-loop
  }

  console.log(result);
}
spiralMatrix(5);
