console.log(" I n i t i a l   C o d e");
console.log("=========================");
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Hello");
  }
  
  info() {
    // Call the greet method
    
    
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}

const animal = new Animal("Leo", 3);
// Remove the line below
animal.greet();

animal.info();

console.log("  A n s w e r   C o d e ");
console.log("=========================");
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Hello");
  }
  
  info() {
    // Call the greet method
    this.greet();
    
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}

const animal = new Animal("Leo", 3);
// Remove the line below

animal.info();
