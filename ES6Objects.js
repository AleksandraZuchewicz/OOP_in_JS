//ES6 way

class Cat {
  contructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speak() {
    "Meow";
  }
}
let cat = new Cat("Fluffy", "White");
console.log(cat);
