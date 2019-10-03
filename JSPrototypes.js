"use strict";

let arr = ["red", "blue", "green"];
let last1 = arr[arr.length - 1];
console.log(last1);

// or
Object.defineProperty(arr, "last2", {
  get: function() {
    return this[this.length - 1];
  }
});
let last2 = arr.last2;
console.log(last2);

// prototype in an object that  exist on every function in js

let myFunc = function() {
  return myFunc.prototype;
};
console.log(myFunc());

let cat = { name: "Ola" };
console.log(cat.__proto__);

// A functions prototype is the object instance tht will be prototype for all objects created using this function as a cinstructor.
// An objects prototype: is the object instance from which the object is inherited

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

let fluffy = new Cat("Fluffy", "White");
console.log(Cat.prototype);
console.log(fluffy.__proto__);
console.log(Cat.prototype === fluffy.__proto__);
