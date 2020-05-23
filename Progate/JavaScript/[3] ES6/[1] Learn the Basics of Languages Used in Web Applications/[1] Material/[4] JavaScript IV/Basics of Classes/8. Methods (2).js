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
  
  // Add the info method
  
  
}

const animal = new Animal("Leo", 3);
animal.greet();

// Call the info method using the animal constant


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
  
  // Add the info method
  info() {
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
  
}

const animal = new Animal("Leo", 3);
animal.greet();

// Call the info method using the animal constant
animal.info();
