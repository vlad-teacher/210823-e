// const person = {
//     userName: 'Valerchik',
//     _age: 23,
//     get age () {
//         return this._age;
//     },
//     set age (newAge) {
//         if (newAge < 100 && newAge > 0 && !isNaN(newAge)) {
//             this._age = newAge;
//         }
//     }
// };

// Object.defineProperty(person, '_age', {
//     enumerable: false
// })

// дан объект
// const person = {
//     firstName: 'Valerchik',
//     lastName: 'Kosyakov'
// };
// Необходимо добавить в объект вычисляемое свойство fullName
// которое возвращает сразу имя и фамилию

// person.fullName ===>>> 'Valecchik Kosyakov'

// const kurochka = {
//     name: 'Ryaba',
//     isAlive: true
// };

// kurochka.isAlive = false;

// kurochka.isAlive = true;

// Object.defineProperty(person, 'age', {
//     get () {},
//     set () {}
// });

// person.city = 'Boston';
// const descriptor = Object.getOwnPropertyDescriptor(person, 'city');
// console.log(descriptor);

// Object.defineProperty(person, 'city', {
//     writable: false,
//     configurable: false,
//     enumerable: false,
//     value: 'Boston'
// });

// person.city = 'Berlin';
// const personKeys = Object.keys(person);

// for (let key in person) {
//     console.log(key);
// }

// {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     get(){},
//     set(){}
// }

// Object.defineProperties();

// "use strict";

// function Person(name, age) {
//   // 1. this = {}
//   this.name = name;
//   this.age = age;

//   // 2. this.__proto__ === Person.prototype
//   // 3. return this;
// }

// Person.prototype = {
//   run() {
//     console.log(`${this.name} runs`);
//   },
// };

// const person = new Person("Valerchik", 23); // instance
// const person2 = new Person("John", 51);

// [] // instance класса Array

// function foo () {} // instance класса Function

// const mySet = new Set();

// console.log(mySet);

// const obj1 = {
//     a: 1
// };

// const obj2 = {
//     b: 2
// }

// const obj3 = {
//     c: 3
// }

// {} => obj3 =>  obj2 => obj1
// const obj2 = Object.create({a: 1});
// obj2.b = 2;
// const obj3 = Object.create(obj2);
// obj3.c = 3;
// console.log(obj3);

// function Person (name, age) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     // return this;
// }

// Person.prototype.run = function () {
//     console.log(`${this.name} runs`);
// };

// const p1 = new Person('Valerchik', 23);

// function Programmer (stack, name, age) {
// this = {};
// this.__proto__ = Programmer.prototype
// Person.call(this, name, age);
// this.stack = stack;
// return this;
// }

// Programmer.prototype = Object.create(Person.prototype); // {}.__proto__ ===>>> Person.prototype
// Programmer.prototype.code = function () {
//     console.log(`${this.name} codes on ${this.stack}`);
// };
// Programmer.prototype.constructor = Programmer;

// const pr1 = new Programmer(['CSS','HTML'], 'John', 23);

// console.log(pr1);

// class Person {
//     constructor (name, age) {
//         // this = {}
//         // this.__proto__ = Person.prototype
//         this.name = name;
//         this.age = age;
//         // return this;
//     }

//     eyes = 2;
//     walk = () => {
//         console.log(`${this.name} walks`);
//     }

//     run () {
//         console.log(`${this.name} runs`);
//     }

//     static func () { // Person.func = function () {}
//         console.log('asdasdasd');
//     }

// }

// Person.func = function () {};

// Person.func();

// Array.from();
// Array.isArray();
// Object.create();
// Object.assign();

// const p1 = new Person('Valerchik', 23);

// class Car {
//     constructor (color, engine) {
//         this.color = color;
//         this.engine = engine;
//     }

//     static repair () {
//         mechanics();
//         pojenik();

//     }
// }

// const c1 = new Car('red', 2);

// er

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     run () {
//         console.log(`${this.name} runs`);
//     }
// }

// class Programmer extends Person {
//     constructor (stack, ...args) {
//         super(...args);
//         this.stack = stack;
//     }

//     code () {
//         console.log(`${this.name} codes on ${this.stack}`);
//     }

//     // method override
//     run () {
//         console.log(`very slowly`);
//         // this olejik
//         super.run();
//     }
// }

// class JSProgrammer extends Programmer {
//     constructor (likesSmoozie, ...args) {
//         super(...args);
//         this.likesSmoozie = likesSmoozie;
//     }
// }

// const valerchik = new Person('Valerchik', 4);
// const olejik = new Programmer(['CSS', 'JS'], 'Olejik', 2);
// const stefan = new JSProgrammer(true, ['HTML'], 'Stefan', 23);

// valerchik.run();
// olejik.run();

// Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100).

// Создать класс Device,
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две
// батарейки).

// Создать класс Gamepad, который наследует от
// Device. Класс Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”, метод disconnect(),
// который отключает Gamepad и метод play(), который
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно
// поле batteryType у Device и type у Battery не совпадают, то
// вывести сообщение что батарейки не вставлены.
// Подключить один девайс к другому можно только если есть
// 2 батарейки. Подключить Gamepad можно только если
// isConnected == false. Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.

// class BatteryEmptyError extends Error {}
// class BatteryRechargeError extends Error {}

// class Battery {
//   #energy = 100; // private

//   constructor(type) {
//     this.type = type;
//   }

//   get energy() {
//     return this.#energy;
//   }

//   set energy(val) {
//     if (!isNaN(val) && typeof val === "number" && val < 100 && val >= 0) {
//       this.#energy = val;
//     }
//   }
// }

// class Device {
//   constructor(batteryType) {
//     this.batteryType = batteryType;
//     this.batteryOne = null;
//     this.batteryTwo = null;
//   }

//   #batteriesExeption() {
//     throw new Error(`connection failed because of batteries exception:
//         battery1 is: ${this.batteryOne}
//         battery2 is: ${this.batteryTwo}
//        `);
//   }

//   insertBattery(batteryOne, batteryTwo) {
//     if (
//       batteryOne.type === this.batteryType &&
//       batteryTwo.type === this.batteryType &&
//       !this.isConnected
//     ) {
//       this.batteryOne = batteryOne;
//       this.batteryTwo = batteryTwo;
//       console.log(`Batteries is OK`);
//     } else {
//       this.#batteriesExeption();
//     }
//   }
// }

// class Gamepad extends Device {
//   constructor(model, ...args) {
//     super(...args);
//     this.model = model;
//     this.isConnected = false;
//   }

//   connectTo(deviceName) {
//     if (this.batteryOne && this.batteryTwo) {
//       this.isConnected = true;
//       console.log(`Gamepad ${this.model} connected to ${deviceName}`);
//     } else {
//       this.#batteriesExeption();
//     }
//   }

//   disconnect() {
//     this.isConnected = false;
//     console.log(`Your Device has disconnected`);
//   }

//   #batteriesExeption() {
//     throw new BatteryEmptyError(`connection failed because of batteries exception:
//         battery1 is: ${this.batteryOne}
//         battery2 is: ${this.batteryTwo}
//        `);
//   }

//   play() {
//     if (!this.batteryOne || !this.batteryTwo) {
//       this.#batteriesExeption();
//     } else if (this.batteryOne.energy === 0 || this.batteryTwo.energy === 0) {
//       throw new Error(`please charge ut batteries, 
//                 battery1 charge: ${this.batteryOne.energy}
//                 battery2 charge: ${this.batteryTwo.energy}
//             `);
//     } else {
//       this.batteryOne.energy -= 10;
//       this.batteryTwo.energy -= 10;
//       console.log(
//         `Well played, charge: ${this.batteryOne.energy}, ${this.batteryTwo.energy}`
//       );
//     }
//   }
// }

// const b1 = new Battery(`AA`);

// const b2 = new Battery(`AA`);
// const b3 = new Battery(`AAA`);
// b2.energy = 50;
// b3.energy = 0;
// const gp1 = new Gamepad(`DualShock`, `AA`);

// // gp1.insertBattery(b1, b2);
// // gp1.connectTo('TV');

// gp1.insertBattery(b1, b2);

// try {
//   gp1.connectTo("TV");
//   gp1.play();
//   gp1.play();
//   gp1.play();
//   gp1.play();
//   gp1.play();
//   gp1.play(); // RECHARGE
//   gp1.play();
//   gp1.play();
//   gp1.play();
//   gp1.play();
// } catch (err) { // throw 'asdsda'
//   // ЛИБО НЕТ БАТЕРЕЕК, ЛИБО ОНИ РАЗРЯЖЕНЫ
//   if (err instanceof BatteryEmptyError) {
//     gp1.insertBattery(b1, b2);
//     gp1.connectTo("TV");
//   } else {
//     throw err;
//   }
// }


// // gp1.insertBattery(b1, b3);
// // gp1.insertBattery(b1, b2);
// // gp1.play();


