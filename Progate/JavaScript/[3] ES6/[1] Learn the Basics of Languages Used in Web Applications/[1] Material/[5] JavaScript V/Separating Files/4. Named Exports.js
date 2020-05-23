console.log(" I n i t i a l   C o d e");
console.log("=========================");
/* script.js */
// Rewrite the below and import the constants dog1 and dog2
import dog from "./dogData";

// Copy from the instructions and rewrite it so that the constants dog1 and dog2 are printed
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
import Dog from "./dog";

// Note the 2 constants dog1 and dog2 below
const dog1 = new Dog("Leo", 4, "Chihuahua");
const dog2 = new Dog("Ben", 2, "Poodle");

// Rewrite the below and export the constants dog1 and dog2
export default dog;


console.log("  A n s w e r   C o d e ");
console.log("=========================");
/* script.js */
// Rewrite the below and import the constants dog1 and dog2
import { dog1, dog2 } from "./dogData";

// Copy from the instructions and rewrite it so that the constants dog1 and dog2 are printed
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();



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
import Dog from "./dog";

// Note the 2 constants dog1 and dog2 below
const dog1 = new Dog("Leo", 4, "Chihuahua");
const dog2 = new Dog("Ben", 2, "Poodle");

// Rewrite the below and export the constants dog1 and dog2
export { dog1, dog2 };
