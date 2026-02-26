function findLargest(a, b, c) {
  // Check if 'a' is the largest
  if (a >= b && a >= c) {
    return a;
  } 
  // If 'a' wasn't the largest, check if 'b' is
  else if (b >= a && b >= c) {
    return b;
  } 
  // If neither 'a' nor 'b' are the largest, it must be 'c'
  else {
    return c;
  }
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
