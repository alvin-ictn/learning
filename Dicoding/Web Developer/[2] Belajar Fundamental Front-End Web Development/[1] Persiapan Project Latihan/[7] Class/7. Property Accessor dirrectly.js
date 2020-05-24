class Car {
  constructor(manufacture, color) {
      this.manufacture = manufacture;
      this.color = color;
      this.enginesActive = false;
  }
}

const johnCar = new Car("Honda", "Red");
console.log(`Warna mobil: ${johnCar.color}`); // output -> Warna Mobil: Red

johnCar.color = "White"; // Mengubah nilai properti color menjadi white

console.log(`Warna mobil: ${johnCar.color}`); // output -> Warna Mobil: White