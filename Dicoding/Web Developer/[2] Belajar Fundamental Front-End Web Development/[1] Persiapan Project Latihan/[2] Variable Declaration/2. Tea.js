function makeTea(isCold) {
  var tea;
  if(isCold) {
     tea = "Make an Ice Tea!"
  } else {
     tea = "Make a Hot Tea!"
  }
  return tea;
}

console.log(makeTea(false));

/* output
Make a Hot Tea!
*/