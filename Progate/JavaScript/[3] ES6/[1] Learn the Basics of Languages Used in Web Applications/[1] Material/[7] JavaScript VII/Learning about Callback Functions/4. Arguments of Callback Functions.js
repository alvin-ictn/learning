console.log(" I n i t i a l   C o d e");
console.log("=========================");
const call = (callback) => {
  callback("Ken the Ninja", 14);
};

// Declare a function that receives two parameters from the callback function inside call
call(() => {
  console.log(`${name} is ${age} years old.`);
});

console.log("  A n s w e r   C o d e ");
console.log("=========================");
const call = (callback) => {
  callback("Ken the Ninja", 14);
};

// Declare a function that receives two parameters from the callback function inside call
call((name,age) => {
  console.log(`${name} is ${age} years old.`);
});
