function makeACake(...rawIngredients) {
  gatheringIngredients(rawIngredients, function(ingridients) {
    makeTheDough(ingridients, function(dough) {
      pourDough(dough, function(pouredDough) {
        bakeACake(pouredDough, function(cake) {
          console.log(cake);
        });
      });
    });
  });
 }

 makeACake("[a,b,c]")

 