///////////////////////////////////////////////////////
//whe we want to create multiple instance of cats with the same syntax
function Cat() {
  this.name = "Ola";
  this.age = 20;
}
// this keyword revers to on object, by deafoult is a global object, its refering to a new empty object
let cat = new Cat();

console.log(cat);

////////////////////////////////////////////////////////
function Cat(name, age) {
  this.name = name;
  this.age = age;
}

let cat = new Cat("Ola", 20);

console.log(cat);
