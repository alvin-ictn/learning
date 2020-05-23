const call = (callback) => {
  callback("Ken the Ninja", 14);
};

// Declare a function that receives two parameters from the callback function inside call
call((name,age) => {
  console.log(`${name} is ${age} years old.`);
});
