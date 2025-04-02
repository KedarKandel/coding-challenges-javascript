const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
  ];

  const buildGraph = ()=>{
    let obj = {}
    for (let edge of edges){
        const [a,b]= edge
        if(!(a in obj)) obj[a] = []
        if(!(b in obj)) obj[b] = []
        obj[a].push(b)
        obj[b].push(a)
    }
    return obj
  }

  console.log(buildGraph(edges))