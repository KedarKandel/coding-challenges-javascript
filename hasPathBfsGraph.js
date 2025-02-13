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
    console.log(current);

    for (let neighbor of graph[current]) {
      if (neighbor === dest) return true;
      queue.push(neighbor);
    }
  }
  return false
};

// true
console.log(haspath(graph, "f", "k"));
