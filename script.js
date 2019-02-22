class Animal {
  constructor(kind) {
    this.kind=kind;
  }
}

class Dog extends Animal {
  constructor(id, name, age) {
    super("mammal");
    this.id = id;
    this.name = name;
    this.age = age;
  }
  bark(){
    console.log(this.name,"whoof");
  }
  run(speed){
    console.log("dog aged"+this.age+"is running with speed:"+ speed)
  }
}

let newDog = new Dog(6, "Max", 5);
let newDog2 = new Dog(9,"Rex", 4);

newDog.bark();
newDog2.bark();
newDog.run(22);
console.log(newDog.kind);
