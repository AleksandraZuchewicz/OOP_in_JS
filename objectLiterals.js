"use strict";

// createing an object
let cat = {
  name: "MAX",
  color: "red"
};
////////////////////////////////////////////////////////
cat.speak = function() {
  console.log("Meeooow");
};
cat.age = 3;
console.log(cat.name);
console.log(cat.age);
console.log(cat.speak());
