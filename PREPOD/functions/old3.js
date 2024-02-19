// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// function a (obj) {
//     obj.a = 1;
//     return obj;
// }

// function b (obj) {
//     obj.b = 2;
//     return obj;
// }

// function c (obj) {
//     obj.c = 3;
//     return obj;
// }

// const aAndB = [a,b];

// const bAndC = [b,c];

// const all = [a,b,c]; // c(b(a())) // pipe a(b(c()))

// const myObj = all.reduce((res, f) => f(res),{});

// c(b(a({})))

// console.log(myObj);

// obj methods

// 'use strict';

// function code() {
//   console.log(`${this.userName} codes`);
// }

// const person = {
//   userName: "Valerchik",
//   home: "Krysha",
//   isOboltus: false,
//   code,
//   stack: ["PHP", "Wordpress", "Drupal"],
// };

// const person2 = {
//   userName: "Mitrofan",
//   home: "Pod Mostom",
//   isOboltus: true,
//   code,
//   stack: ["CSS", "JS", "React"],
// };

// const dog = {
//   userName: "Bobik",
//   poroda: "ovcharka",
//   code: person.code,
// };

// function makeThemCode(fe, be, qa) {
//   console.log("CODE EVERYBODY!");
//   fe();
//   be();
//   qa();
// }

// makeThemCode(person.code, person2.code, dog.code);

// makeThemCode(person2.code, dog.code, person.code);

// function code() {
//   console.log(`${this.userName} codes`);
// }

// const person = {
//   userName: "Valerchik",
//   home: "Krysha",
//   isOboltus: false,
//   code,
//   codeAll: function () {
//     this.stack.forEach((tech) => {
//         console.log(`${this.userName} codes on ${tech}`);
//     });
//   },
//   stack: ["PHP", "Wordpress", "Drupal"],
// };

// person.codeAll();

// const person2 = {
//   userName: "Mitrofan",
//   home: "Pod Mostom",
//   isOboltus: true,
//   code,
//   stack: ["CSS", "JS", "React"],
// };

// const eat = function (smth, amount) {
//   console.log(`${this.userName} eats ${smth} of ${amount}kg`);
// }

// const person = {
//   userName: "Valerchik",
//   home: "Krysha",
//   run() {
//     console.log(`${this.userName} runs`);
//   },
//   eat: eat,
// };

// const dog = {
//   userName: "Bobik",
// };

// call apply bind

// eat.call(dog, 'meat', 1);
// eat.apply(person, ['tomato', 20]);

// const eatCopy = eat.bind(dog, 'shahlyk');

// eatCopy(10);
// eatCopy(20);

// const persons = [
//     {
//         name: 'One',
//         age: 1,
//     },
//     {
//         name: 'Two',
//         age: 2
//     },
//     {
//         name: 'Three',
//         age: 3
//     },
//     {
//         name: 'Four',
//         age: 4
//     }
// ];

// Каждому объекту из этого массива необходимо добавить метод .sayHello()
// который выводит сообщение вида "Hello! My name is {NAME}",
// где NAME - это поле name каждого объекта

// const persons = [
//   {
//     name: "One",
//     age: 1,
//   },
//   {
//     name: "Two",
//     age: 2,
//   },
//   {
//     name: "Three",
//     age: 3,
//   },
//   {
//     name: "Four",
//     age: 4,
//   },
// ];

// const sayHello = function () {
//   console.log(`Hello! My name is ${this.name} `);
// };

// const helloPersons = persons.map((item) => ({
//   ...item,
//   sayHello,
// }));

// helloPersons[0]["sayHello"]();

// console.log(helloPersons);

// const timeoutId = setTimeout(() => {
//     console.log('TWO!');
// }, 1200);

// clearTimeout(timeoutId);

// const intervalId = setInterval(() => {
//     console.log('ITS INTERVAL!');
// }, 200);

// clearInterval(intervalId);

// используя setInterval и setTimeout (and clears)
// написать код который выводит в консоль в течении 5 секунд
// числа 1 2 3 4 5
// после чего останавливается (вывод чисел прекращается)

// let count = 0;

// const interval = setInterval(() => {
//   count++;

//   if (count > 5) {
//     clearInterval(interval);
//   }

//   console.log(count);
// }, 1000);

// console.log('ONE!');

// setTimeout(() => {
//     console.log('TWO');
// }, 200);

// console.log('THREE!');
