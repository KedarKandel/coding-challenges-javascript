// Write a function that accepts a positive number N.
// The function should console log the step shape with N levels using # shape.

// "# " N=1

// "# "
// "##"

//  "#  "
//  "## "
//  "###"

// "#   "
// "##  "
// "### "
// "####"

function logSteps(n) {
  for (let row = 1; row <= n; row++) {
    let step = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

logSteps(4);
