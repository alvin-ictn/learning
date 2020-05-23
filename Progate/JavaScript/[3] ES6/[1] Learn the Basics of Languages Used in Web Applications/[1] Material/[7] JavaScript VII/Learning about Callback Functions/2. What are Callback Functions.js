console.log(" I n i t i a l   C o d e");
console.log("=========================");
const printKen = () => {
  console.log("Ken the Ninja");
};

// Add a parameter named callback to call
const call = () => {
  console.log("Calling the callback function.");
  // Call the function callback
  
};

// Pass printKen as the argument and run call


console.log("  A n s w e r   C o d e ");
console.log("=========================");
const printKen = () => {
  console.log("Ken the Ninja");
};

// Add a parameter named callback to call
const call = (callback) => {
  console.log("Calling the callback function.");
  // Call the function callback
  callback();
};

// Pass printKen as the argument and run call
call(printKen);
