console.log(" I n i t i a l   C o d e");
console.log("=========================");
/* script.js */
// Rewrite "./dogData" (relative path)
import { dog1, dog2 } from "./dogData";

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
// Rewrite "./dog" (relative path)
import Dog from "./dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");
const dog2 = new Dog("Ben", 2, "Poodle");

export { dog1, dog2 };

console.log("  A n s w e r   C o d e ");
console.log("=========================");
/* script.js */
// Rewrite "./dogData" (relative path)
import { dog1, dog2 } from "./data/dogData";

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
// Rewrite "./dog" (relative path)
import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");
const dog2 = new Dog("Ben", 2, "Poodle");

export { dog1, dog2 };