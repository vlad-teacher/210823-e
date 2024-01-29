// let age = 2;

// function foo () {
//     // let age = 0;

//     function bar () {
//        let age = 100;
//     }

//     bar();

//     console.log(age);
// }

// foo();

// let b = 33;
// let c = 44;

// function foo (test) {

//     let age = 100;

//     function bar (age) { // let age = 100;

//         age = 222;

//         console.log(blabla);
//         // {age, test, b}
//     }

//     bar(age);

//     let blabla = 'blabla';

// }

// foo();

// console.log(age);

// HIGHER ORDER FUNCTION
// callback

// let a = 1;

// function foo (cb) { // bar
//     let a = 2;

//     cb();
// }

// foo(bar);

// function bar () {
//     // {a: 1, foo}

//     console.log(a);
// }

// Создать функцию checkLogin, которая принимает 4 параметра.
// 1 параметр - это логин, введенный пользователем,
// 2 – правильный логин,
// 3 – callback, который вызовется если логин верный,
// 4 – callback, который вызовется если логин ложный.

// let correctLogin = 'admin'

// let userLogin = prompt('Введите логин:');

// function cbTrue(){
//     console.log('Добро пожаловать!')
// }

// function cbFalse(){
//     console.log('Пароль неверный.')
// }

// function checkLogin(login, trueLogin, onCorrectLogin, onIncorrectLogin = () => console.log('DEFAULT')){
//     if (login === trueLogin){
//         onCorrectLogin();
//     } else{
//         onIncorrectLogin();
//     }
// }

// checkLogin(userLogin, correctLogin, cbTrue, cbFalse);

// checkLogin('user', 'asdasd', () => console.log('test'));

// arr.reduce();

// function foo (cb) {
//     console.log('HELLO');

//     cb();
// }

// foo(bar);
// foo(valerchik);
// foo(() => console.log('asdasd'));

// function bar () {
//     console.log('WORLD');
// }

// function valerchik () {
//     console.log('VALERCHIK');
// }

// IIFE
// immidately invoked function expression

// (() => {
//    let user = 'Valerchik';
// })()

// (function (a,b) {
//     let user = 'Olejik';
// })(2,3)

// const foo = function () {};

// let user = 'valerchik';

// напишите функцию map

// const result = map([1,2,3], (item, index, arr  ) => {
//     if (index % 2 === 0) {
//         return item * 2;
//     } else {
//         return item;
//     }
// });

// function map (mass, cb) {
//     let resultArr = [];

//     for (let i = 0; i < mass.length; i++) {
//         const futureElement = cb(mass[i], i, mass);

//         resultArr.push(futureElement);
//     }

//     return resultArr;
// }

// console.log(result);

// closure замыкание
// curry
// compose

// counter() // 1
// counter() // 2
// counter() // 3

// function foo () {
//     let num = 0;

//     function innerCounter () {
//         return ++num;
//     }

//     return innerCounter;
// }

// const counter = foo(); // function
// const counter2 = foo(); // function

// counter2(); // 1
// counter2(); // 2

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter());
// console.log(counter());

// curry, partially applied function

// function foo (a,b,c) {
//     return a + b + c;
// }

// foo(1,2,3);

// const tmpResult = foo(1,2);

// tmpResult(5);
// tmpResult(10);
// tmpResult(100);
// tmpResult(993293);

// function foo (a,b) {
//     const arr = [];
//     for (let i = 0; i < (a*b)**2; i++) {
//         arr.push(new Array(100).fill(1).map(() => a*i));
//     }

//     return function (c) {
//         arr[0] = arr[0] + c;

//         return arr;
//     }
// }

// function foo (a) {
//     return function (b) {
//         const tmpResult = a + b;

//         return function (c) {
//             return tmpResult + c;
//         }
//     }
// }

// console.log( foo(1)(2)(3) );

// const person = {
//     name: 'John',
//     age: 23 // 999
// };

// чистая функция

// const person = {
//   name: "John",
//   age: 23,
// };

// function sum(obj, a, b) {
//   return {
//     ...obj,
//     age: a + b
//   };
// }

// sum(person, 2, 3);
// sum(person, 2, 3);

// deep object copy

// const person = {
//     name: 'Valerchik',
//     size: {
//         height: 23,
//         width: 51
//     },
//     adress: {
//         city: 'Boston',
//         precise: {
//             street: 'Sovetskaya',
//             zipCode: 4324234
//         }
//     },
//     tech: [{a: 2},{b: 3}],
//     sayHello: function () {}
// };

// const obj = {...first}

// function deepClone (obj) {
//     const objCopy = {};

//     for (const key in obj) {
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             objCopy[key] = deepClone(obj[key]);
//         } if (Array.isArray(obj[key])) {
//             objCopy[key] = obj[key].map((obj) => deepClone(obj));
//         } else {
//             objCopy[key] = obj[key];
//         }
//     }

//     return objCopy;
// }

// const result = deepClone(person);

// console.log(result.tech[0] === person.tech[0]);

// func(foo)

// const result = foo(); // func

// function foo () {
//     foo();
// }

// counter(5) // !for

// function counter (a) { //
//     console.log(a); //
//     if (a !== 1) {
//         counter(a - 1); //
//     }
// }

// counter(5);

// const arrays = [
//     [1,4,5],
//     [3,5,17,3,45],
//     [3,5,2,6],
//     [4,64,3]
// ];

// [23,12,5,46]
// 1
// arrays[1]

// function getArrSum (arr) {
//     return arr.reduce((acc, num) => acc + num,0);
// }

// const sumOfArrays = arrays.reduce(function(previousValue, currentArr){
//     const sum = getArrSum(currentArr);

//     return [...previousValue, sum];
// }, []);

// const maxNum = Math.max(...sumOfArrays);

// const maxNumIndex = sumOfArrays.indexOf(maxNum);

// console.log(`max arr nums is `, arrays[maxNumIndex]);

// function maxNum (arr){
//     return Math.max(...arr)
// }

// const maxArrElement = maxNum(sumOfArrays);
// console.log(`массив сумма элементов которого наибольшая ${maxArrElement}`);

// []

// function doubleNum (arr){
//     return arr.filter((element, index, array) => {
//         return array.lastIndexOf(element) !== index;
//     }) ;
// }

// function getUniqueDoubleNum (arr) {

//     return arr.reduce((resultArr, num, index, arr) => {}, []);

// }

// [1,4,6,74]
// const arrNumbers = [1,1,1,4,4,5,1,6,6,74,74,74,3];

// const arrDoubleNumbers = doubleNum(arrNumbers);

// console.log(`массив из тех чисел которые повторялись ${arrDoubleNumbers}`);

// const arr = [1, 1, 2, 2, 4, 5, 6, 7, 7];

// function getUniqueDoubleNum(arr) {
//   return arr.reduce((resultArr, num) => {
//     const doesNumRepeats = arr.indexOf(num) !== arr.lastIndexOf(num);
//     const isNumAlreadyFound = resultArr.includes(num);

//     if (doesNumRepeats && !isNumAlreadyFound) {
//       resultArr.push(num);
//     }

//     return resultArr;
//   }, []);
// }
// console.log(getUniqueDoubleNum(arr));

// const names = [{user: 'Valerchik'}, {user:'Olejik'}, {user:'John'}];


// const result = names.indexOf(2);

// const result2 = names.findIndex((obj, index, arr) => obj.user === 'Olejik' );

// console.log(result2);


// 1. написать функию toogleMe(), которая при каждом своем вызове
// возвращает чередующийся результат (true, false, true, false ...)

// 2. 
// создать функцию которая возвращает числа следующим образом:
// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14

// 3.
// Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)


// let classNames = '';
// classNameEditor('test', true); // 'test'
// classNameEditor('foo', true); // 'test foo'
// classNameEditor('smth', true); // 'test foo smth'


// HOF higher order function
// compose
// obj methods


// function makeToogleMeFunc(){
//     let boo = false;

//     return function (){
//         boo = !boo;

//         return boo;
//     };
// }


// let toogleMe = makeToogleMeFunc();

// console.log(toogleMe());
// console.log(toogleMe());
// console.log(toogleMe());
// console.log(toogleMe());
// console.log(toogleMe());