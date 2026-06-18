function findLargest(a, b, c) {
  // Check if 'a' is the largestfunction findLargest(a, b, c) {
  // Check if 'a' is greater than or equal to both 'b' and 'c'
  if (a >= b && a >= c) {
    return a;
  } 
  // If 'a' wasn't the largest, check if 'b' is greater than or equal to both
  else if (b >= a && b >= c) {
    return b;
  } 
  // If neither 'a' nor 'b' are the largest, 'c' must be the largest
  else {
    return c;
  }
}

// Prompt the user for input and parse them as integers
const num1 = parseInt(prompt("Enter First Number."), 10);
const num2 = parseInt(prompt("Enter Second Number."), 10);
const num3 = parseInt(prompt("Enter Third Number."), 10);

// Display the result if the inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  alert(findLargest(num1, num2, num3));
} else {
  alert("Please enter valid integers.");
}
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
