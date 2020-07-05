var helloWorld = function(name) {
  return new Promise((resolve, reject) => {
    if (name === "" || name === undefined || name === null) {
      reject("You have to provide the name!");
    } else {
      var message = "Hello world, " + name;
      resolve(message);
    }
  });
};
 
console.log(helloWorld(""));