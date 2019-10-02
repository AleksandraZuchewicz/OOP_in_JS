"use strict";

let cat = {
  name: "Puffy",
  color: "White"
};
console.log(Object.getOwnPropertyDescriptor(cat, "name"));

//{ value: 'Puffy',
//writable: true,
//enumerable: true,
//configurable: true }
