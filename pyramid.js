// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using the # character.
// Make sure the pyramid has spaces on both sides.

//  "  #  " mid= Math.floor(2*n-1)/2 = 2
//  " ### "
//  "#####"
//

// if(col = mid), (col=mid-v, col=mid+v)
// N=3, row=3, r1-c1,r2-c3,r3-c5, c= 2*r-1, c=2*1-1=1, c= 2*2-1=3, c=2*3-1=5, c=2n-1

function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let line = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col <= mid + row && col >= mid - row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    // console.log(line);
  }
}
pyramid(15);


function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        // Print spaces
        const spaces = "".repeat(n - i);
        // Print stars
        const stars = "*".repeat(2 * i - 1);

        console.log(spaces + stars);
    }
  
}

printPyramid(5);

