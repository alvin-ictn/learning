function makeTea(isCold) {
   if(isCold) {
       let tea = "Make an Ice Tea!"
   } else {
       let tea = "Make a Hot Tea!"
   }
   return tea;
}
 
console.log(makeTea(false));
 
/* output
ReferenceError: tea is not defined
*/