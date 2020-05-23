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

class Dog extends Animal {
}

// Assign the Dog class instance to the dog constant


// Call the dog instance's info method


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

class Dog extends Animal {
}

// Assign the Dog class instance to the dog constant
const dog = new Dog("Leo",4);

// Call the dog instance's info method
dog.info();
