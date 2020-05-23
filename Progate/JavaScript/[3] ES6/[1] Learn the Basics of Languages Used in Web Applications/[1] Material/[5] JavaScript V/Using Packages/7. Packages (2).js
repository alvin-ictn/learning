console.log(" I n i t i a l   C o d e");
console.log("=========================");
/* script.js */
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
import chalk from "chalk";
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
// Import readline-sync


import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");

// Rewrite using readlineSync.question
const name = "Ben";

// Rewrite using readlineSync.questionInt
const age = 2;

// Rewrite using readlineSync.question
const breed = "Poodle";

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };

console.log("  A n s w e r   C o d e ");
console.log("=========================");
/* script.js */
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
import chalk from "chalk";
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
// Import readline-sync
import readlineSync from "readline-sync";

import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");

// Rewrite using readlineSync.question
const name = readlineSync.question("Enter your name: ");

// Rewrite using readlineSync.questionInt
const age = readlineSync.questionInt("Enter your age: ");

// Rewrite using readlineSync.question
const breed = readlineSync.question("Enter your breed: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };