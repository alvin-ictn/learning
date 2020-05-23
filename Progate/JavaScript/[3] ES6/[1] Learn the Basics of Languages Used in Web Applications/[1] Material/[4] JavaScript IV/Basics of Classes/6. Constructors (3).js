console.log(" I n i t i a l   C o d e");
console.log("=========================");
class Animal {
  // Add the arguments 「name」and「age」
  constructor() {
    // Replace the string value "Leo" with the value of the name argument
    this.name = "Leo";
    
    // Replace the  value 「3」 with the value of the age argument
    this.age = 3;
  }
}

// Pass the arguments 「"Mocha"」 「8」
const animal = new Animal();

console.log(`Name: ${animal.name}`);
console.log(`Age: ${animal.age}`);

console.log("  A n s w e r   C o d e ");
console.log("=========================");
class Animal {
  // Add the arguments 「name」and「age」
  constructor(name,age) {
    // Replace the string value "Leo" with the value of the name argument
    this.name = name;
    
    // Replace the  value 「3」 with the value of the age argument
    this.age = age;
  }
}

// Pass the arguments 「"Mocha"」 「8」
const animal = new Animal("Mocha",8);

console.log(`Name: ${animal.name}`);
console.log(`Age: ${animal.age}`);
