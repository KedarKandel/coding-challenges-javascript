function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let fresh = 0;
  const queue = [];

  // Initialize the grid, count fresh oranges, and enqueue rotten ones
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++;
      else if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let minutes = 0;

  // BFS to rot adjacent fresh oranges
  while (queue.length > 0 && fresh > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < cols &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          queue.push([nx, ny]);
          fresh--;
        }
      }
    }
    minutes++;
  }
  console.log(queue);
  return fresh === 0 ? minutes : -1;
}

// Example Usage
const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid)); // Output: 4