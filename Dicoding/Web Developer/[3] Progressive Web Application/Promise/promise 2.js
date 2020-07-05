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
 
helloWorld("Kresna Galuh")
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });
// output: Hello world, Kresna Galuh

helloWorld("")
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });
 
// output: You have to provide the name!