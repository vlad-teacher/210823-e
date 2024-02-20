let person = {
  firstName: "Valerchick",
  lastName: "Kosyakov",
  get fullName() {
    return this.firstName + this.lastName;
  },
  set fullName(value) {},
};
let name = "Ivan Ivanov";

person.fullName = "a";

console.log(person.fullName);
const obj1 = {
  a: 1,
};

let obj2 = {
  b: 2,
};

let obj3 = {
  c: 3,
};

// obj3 =>  obj2 => obj1

obj3 = Object.create(obj2);
obj2 = Object.create(obj1);

console.log(obj3); // 2
// console.log(obj2.a); // 1


Array.prototype = "s"
  console.log(Array.prototype)

  function Person(){

  }

Person.prototype = {}
   console.log(Person)
   console.dir(Person)