const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const buildGraph = () => {
  let obj = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in obj)) obj[a] = [];
    if (!(b in obj)) obj[b] = [];
    obj[a].push(b);
    obj[b].push(a);
  }
  return obj;
};

//console.log(buildGraph(edges));

console.log([] == false); //true
console.log(undefined === false); //false
console.log(null === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log("" === 0); //false
console.log("" == 0); //true


/////////
const obj1 = {key:"value"}
const obj2 = {key:"value"}
console.log(obj1 == obj2) //false
console.log(obj1 === obj2) //false
console.log(obj1 === obj1) //true---same reference


/////////
console.log(true ==="1") // false
console.log(true ===1)//false
console.log(true =="1")//true
console.log(true ==1)//true
console.log(true =="2")//false
///
console.log([2]==2)//true
console.log([2,3]=="2,3")//true

//
console.log(+0 == -0)// true
console.log(+0 === -0)// true

