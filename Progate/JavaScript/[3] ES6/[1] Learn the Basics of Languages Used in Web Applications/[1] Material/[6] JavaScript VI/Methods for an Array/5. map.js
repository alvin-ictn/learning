console.log(" I n i t i a l   C o d e");
console.log("=========================");
const numbers = [1, 2, 3, 4];

// Create a new array in the numbers constant by using the map method, and assign it to the doubledNumbers constant


// Print the doubledNumbers constant



const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Create a new array in the names constant by using the map method, and assign it to the fullNames constant


// Print the fullNames constant


console.log("  A n s w e r   C o d e ");
console.log("=========================");
const numbers = [1, 2, 3, 4];

// Create a new array in the numbers constant by using the map method, and assign it to the doubledNumbers constant
const doubledNumbers = numbers.map(number => {
  return number*2;
});

// Print the doubledNumbers constant
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Create a new array in the names constant by using the map method, and assign it to the fullNames constant
const fullNames = names.map(name => {
  return name.firstName + " " + name.lastName;
});

// Print the fullNames constant
console.log(fullNames);
