//stored in variable
const sayName = (name="Tidak tahu") => console.log(`Nama saya ${name}`);
sayName();
sayName("Alvin Mantovani");

console.log("");
console.log("");
console.log("");
//Passed as An Argument
["Dimas", "Widdy", "Buchori"].forEach(name => console.log(`Nama saya ${name}`));

console.log("");
console.log("");
console.log("");
//Stored in Object Property
const user = {
  introduce: (name="Coco Chip") => console.log(`Nama saya ${name}`)
}
user.introduce();
user.introduce("Alvin Mantovani");