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
 
function addCodepolitan(message) {
  return message + " from Codepolitan!";
}
helloWorld("Ahmad Oriza")
  .then(function(result) {
    // logic for processing first message here.
    return result;
  })
  .then(function(result2) {
    var message = addCodepolitan(result2);
    console.log(message);
  })
  .catch(function(error) {
    console.log(error);
  });

  var promises = Promise.all([
    helloWorld("Kresna Galuh"),
    helloWorld(""),
    helloWorld("Ahmad Oriza")
      .then(function(result) {
        return result;
      })
      .then(function(result2) {
        var message = addCodepolitan(result2);
        return message;
      })
  ]);
  promises.then(function(results) {
    console.log(results);
  });