console.log(" I n i t i a l   C o d e");
console.log("=========================");
class Animal {
  constructor() {
    // Assign the string value 「Leo」 to the name property
    
    
    // Assign the value 「3」 to the age property
    
  }
}

const animal = new Animal();

// Output 「Name: ____」


// Output 「Age: __」


console.log("  A n s w e r   C o d e ");
console.log("=========================");
class Animal {
  constructor() {
    // Assign the string value 「Leo」 to the name property
    this.name = "Leo";
    
    // Assign the value 「3」 to the age property
    this.age = 3;
  }
}

const animal = new Animal();

// Output 「Name: ____」
console.log(`Name: ${animal.name}`);

// Output 「Age: __」
console.log(`Age: ${animal.age}`);
