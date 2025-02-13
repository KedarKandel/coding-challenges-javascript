
// DFS Using recurssion

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

function hasPath(graph, src, dest) {
  if (src === dest) return true;

  for (neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest)) {
      return true;
    }
  }

  return false;
}

console.log(hasPath(graph, "f", "k"));
console.log(hasPath(graph, "h", "k"));
