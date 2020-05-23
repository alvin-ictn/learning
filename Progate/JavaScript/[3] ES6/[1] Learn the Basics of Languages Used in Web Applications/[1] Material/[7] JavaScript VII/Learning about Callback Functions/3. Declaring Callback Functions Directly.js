console.log(" I n i t i a l   C o d e");
console.log("=========================");
const printKen = () => {
  console.log("Ken the Ninja");
};

const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};

call(printKen);

// Declare the function in the argument and pass it
call();

console.log("  A n s w e r   C o d e ");
console.log("=========================");
const printKen = () => {
  console.log("Ken the Ninja");
};

const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};

call(printKen);

// Declare the function in the argument and pass it
call(() => {
  console.log("Master White");
});
