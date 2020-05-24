const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
 
const allFavorites1 = [favorites, others]
 
console.log(allFavorites1);
 
/* output:
[[ 'Seafood', 'Salad', 'Nugget', 'Soup' ], [ 'Cake', 'Pie', 'Donut' ]]
*/

const allFavorites2 = [...favorites, ...others]
 
console.log(allFavorites2);
/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/