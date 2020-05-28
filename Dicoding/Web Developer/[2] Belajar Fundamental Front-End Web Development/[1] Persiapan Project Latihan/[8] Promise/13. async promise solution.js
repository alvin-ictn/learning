const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if(seeds >= 10) {
        resolve("Coffee didapatkan!");
      } else {
        reject("Biji kopi habis!")
      }
    }, 1000)
  })
 }
 
function makeCoffee() {
  getCoffee()
  .then(coffee => {
    console.log(coffee)
  })
 }
  
  
 makeCoffee();
  
  
 /* output
 Coffee didapatkan!
 */