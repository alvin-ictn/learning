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
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}

// Define the Dog class to inherit from the Animal class



const animal = new Animal("Leo", 3);
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
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}

// Define the Dog class to inherit from the Animal class
class Dog extends Animal {
  
}


const animal = new Animal("Leo", 3);
animal.info();
