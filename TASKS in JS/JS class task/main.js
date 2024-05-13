class Animals {
  constructor(height, weight, color) {
    this.height = height;
    this.weight = weight;
    this.color = color;
  }
  run() {
    console.log("the animal is running");
  }
  eat() {
    console.log("the animal is eating");
  }
}
class Dog extends Animals {
  constructor(height, weight, color, breed, Name) {
    super(height, weight, color);
    this.breed = breed;
    this.Name = Name;
  }
  myBreed() {
    console.log(`My dog's breed is ${this.breed}`);
  }
  name() {
    console.log(`My dog's name is ${this.Name}`);
  }
}
const myDog = new Dog(50, 30, "Beige", "Husky", "Britty");
console.log(`Height of the dog is ${myDog.height}`);
console.log(`Weight of the dog is ${myDog.weight}`);
console.log(`Color of the dog is ${myDog.color}`);
myDog.run();
myDog.eat();
myDog.myBreed();
myDog.name();

function sum(a, b) {
  return a + b;
}
