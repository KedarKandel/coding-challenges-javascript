graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}; // 2

function connectedComponentsCount(graph) {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    console.log(visited);
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
}

function explore(graph, currentNode, visited) {
  if (visited.has(parseInt(currentNode))) return false;
  visited.add(parseInt(currentNode));

  for (let neighbor of graph[currentNode]) {
    explore(graph, neighbor, visited);
  }
  return true;
}
console.log(connectedComponentsCount(graph));
