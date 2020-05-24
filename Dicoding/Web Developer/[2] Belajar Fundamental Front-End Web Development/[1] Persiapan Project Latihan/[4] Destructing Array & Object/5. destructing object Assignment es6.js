const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}


let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui object destruction
({firstName, age} = profile);

console.log(firstName);
console.log(age);

/* output:
John
18
*/



// tidak bisa karena JavaScript mengira kita membuat block statement
// block statement tidak bisa berada pada sisi kiri assignment
// {firstName, age} = profile; menjadi ==> ({firstName, age} = profile);
