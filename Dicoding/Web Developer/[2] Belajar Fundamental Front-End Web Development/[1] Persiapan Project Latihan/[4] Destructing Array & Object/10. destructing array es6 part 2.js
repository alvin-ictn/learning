const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood ] = favorites;
 
console.log(thirdFood);
 
/* output:
Nugget
*/

const color = ["red","green","blue","teal","orange","black"];

const [, , , , orange] = color; //dihitung dari banyaknya comma ( , )
console.log(orange);