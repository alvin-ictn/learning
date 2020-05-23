console.log(" I n i t i a l   C o d e");
console.log("=========================");
/* script.js */
// Remove the code below
import Dog from "./dog";

const dog = new Dog("Leo", 4, "Chihuahua");
// Remove the code above

// Import the constant dog


dog.info();
/* animal.js */
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

export default Animal;

/* dog.js */
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I am a ${this.breed}`);
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;

/* dogData.js */
// Make the dog constant accessible in this file


// Export the constant dog


console.log("  A n s w e r   C o d e ");
console.log("=========================");
/* script.js */
// Remove the code below



// Remove the code above

// Import the constant dog
import dog from "./dogData";

dog.info();

/* animal.js */
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

export default Animal;

/* dog.js */
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I am a ${this.breed}`);
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;

/* dogData.js */
// Make the dog constant accessible in this file
import Dog from "./dog";
const dog = new Dog("Leo", 4, "Chihuahua");
// Export the constant dog
export default dog;
