console.log(" I n i t i a l   C o d e");
console.log("=========================");
const number1 = 103;
const number2 = 72;
const number3 = 189;

// Write a function called getMax to get the maximum value


// Print "The maximum value is __"


console.log("  A n s w e r   C o d e ");
console.log("=========================");
const number1 = 103;
const number2 = 72;
const number3 = 189;

// Write a function called getMax to get the maximum value
const getMax = (a, b, c) => {
  let max = a;
  
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  return max;
};

// Print "The maximum value is __"
const max = getMax(number1, number2, number3);
console.log(`The maximum value is ${max}`);
