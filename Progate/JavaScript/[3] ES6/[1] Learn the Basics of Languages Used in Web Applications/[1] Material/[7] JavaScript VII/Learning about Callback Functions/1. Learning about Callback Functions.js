console.log(" I n i t i a l   C o d e");
console.log("=========================");
const printKen = () => {
  console.log("Ken the Ninja");
};

const printMaster = () => {
  console.log("Master White");
};

const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};

// Rewrite the argument as printMaster and confirm the output
call(printKen);

console.log("  A n s w e r   C o d e ");
console.log("=========================");
const printKen = () => {
  console.log("Ken the Ninja");
};

const printMaster = () => {
  console.log("Master White");
};

const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};

// Rewrite the argument as printMaster and confirm the output
call(printMaster);
