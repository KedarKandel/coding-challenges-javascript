const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const haspath = (graph, src, dest) => {
  const queue = [src];

  while (queue.length > 0) {
    
    const current = queue.shift();
    if (current === dest) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// true
console.log(haspath(graph, "f", "k"));
console.log(haspath(graph, "h", "k"));
