const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// build the adjecency graph.
const buildGraph = (edges) => {
  const obj = {};
  for (let edge of edges) {
    let [a, b] = edge;
    if (!(a in obj)) obj[a] = [];
    if (!(b in obj)) obj[b] = [];
    obj[a].push(b);
    obj[b].push(a);
  }

  return obj;
};

const underictedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

// helper function which should return boolean value

const hasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;
  // check for visited src
  if (visited.has(src)) return false;
  // add src to visited set
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited)) return true;
  }
  return false;
};

console.log(underictedPath(edges, "j", "m")); //true
