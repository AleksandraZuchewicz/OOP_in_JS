"use strict";

let cat = {
  name: { first: "Puffy", last: "laBeouf" },
  color: "White"
};

Object.defineProperty(cat, "fullName", {
  get: function() {
    return this.name.first + " " + this.name.last;
  },
  set: function(value) {
    let nameParts = value.split(" ");
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});
cat.fullName = "Muffin Top";
console.log(cat.fullName);

console.log(cat.name.first);

console.log(cat.name.last);
