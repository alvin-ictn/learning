console.log(" I n i t i a l   C o d e");
console.log("=========================");
/* script.js */
// Move the Animal class definition to animal.js and remove it below
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

// Move the Dog class definition to dog.js and remove it below
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info() {
    this.greet();
    console.log(`My name is${this.name}`);
    console.log(`I am a ${this.breed}`);
    
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge}years old in human years`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// Leave the code below because it's not part of the Animal or Dog classes
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();

/* animal.js */

/* dog.js */

console.log("  A n s w e r   C o d e ");
console.log("=========================");
/* script.js */
// Move the Animal class definition to animal.js and remove it below


// Move the Dog class definition to dog.js and remove it below


// Leave the code below because it's not part of the Animal or Dog classes
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();


/* animal.js */
// Paste the Animal class definition
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

/* dog.js */
// Paste the Dog class definition
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info() {
    this.greet();
    console.log(`My name is${this.name}`);
    console.log(`I am a ${this.breed}`);
    
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge}years old in human years`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}