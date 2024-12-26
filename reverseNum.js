let number = -123;

function reverseNum(n) {
  // let arr = String(n).split("");
  //  console.log(arr.reverse().join(""))
  // let res = "";
  // for (let i = arr.length; i > 0; i -= 1) {
  //   res += i;
  // }
  // return typeof res;

  let reversed = "";
  const isNeg = n < 0;
  
  if (isNeg) {
    n = Math.abs(n);
  }

  while (n != 0) {
    reversed = String(reversed) + String(n % 10);
    n = Math.floor(n / 10);
  }
  return isNeg ? -reversed : reversed;
}

console.log(reverseNum(number));
