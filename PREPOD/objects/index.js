// [,,]
// default values

// const str = 'city';

// const person = {
//     [str]: 'Berlin',
//     name: "Valerchik",
//     age: 0,
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         height: 200,
//         width: 200,
//         adress: ['one', 'two']
//     }
// };

// const persons = [
//     {
//         name: 'John',
//         age: 23
//     },
//     {
//         name: 'Peter',
//         age: 44
//     },
//     {
//         name: 'David',
//         age:99
//     }
// ];

// for (let i = 0; i < persons.length ; i++ ) {
//     console.log( persons[i].name );
// }

// const obj = {};

// let isObjEmpty = 1;

// for (let key in obj) {
//     isObjEmpty = 0;
//     break;
// }

// console.log(`object is ${isObjEmpty ? 'empty' : 'not empty'}`);



// 1. дан рандомный объект, вывести в консоль информацию о том пустой он или нет
// 2. дан объект
// const student = {
//     math: 2,
//     biology: 3,
//     language: 5,
//     isOboltus: true
// };

// const student = {
//     math: 2,
//     biology: 3,
//     language: 5,
//     isOboltus: true
// };


// for (let key in student) {
//     if ( typeof student[key] === 'number' && !isNaN(student[key])) {
//         student[key] *= 2;
//     }
// }

// console.log(student)

// нужно увеличить все ЧИСЛОВЫЕ ПОЛЯ в 2 раза (циклом)
// 3. дан объект
// const pupyrki = {
//     purple: 23,
//     yellow: 12,
//     blue: 102,
//     orange: 10
// };

// let sum = 0;

// for (let key in pupyrki) {
//     sum += pupyrki[key];
// }

// вывести в консоль сумму ВСЕХ ПУПЫРОК

// console.log( 'isProgrammer' in person );

// for (const key in person) {
//     console.log(person[key]);
// }

// const str = 'isProgrammer';

// console.log( person.age );
// console.log( person['isProgrammer'] );

// person.newField = 'smth';

// person.age++;

// delete person.age;

// const person = {
//     name: "Valerchik",
//     age: 0,
//     isProgrammer: true,
//     adress: 'Berlin',
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         height: 200,
//         width: 200,
//         adress: ['one', 'two']
//     }
// };

// const { size: {adress: [,two]} = {adress: ['three', 'four']} } = person;

// console.log(two);

// const person2 = {
//     name: "Olejik",
//     age: 10,
//     isProgrammer: true,
//     stack: ['PHP', 'CSS', 'JS'],
//     size: {
//         height: 100,
//         width: 200,
//         adress: ['three']
//     }
// };

// const arr = ['one'];
// const [a,b = 'another default',blabla = 'default'] = arr;

// const stack = person.stack;

// console.log(adress);
// console.log(adress2);

// const result = Object.keys(person);
// ['name', 'age', 'isProgrammer', 'stack']

// const obj1 = {
//     a: 1
// };

// const obj2 = {
//     b: 2,
//     c: 'world',
// };

// const obj3 = {
//     c: 3
// };

// const obj4 = { 
//     ...obj3,
//     ...obj2,
//     ...obj1,
//     someValue: 100
// };

// console.log(obj4);

// const result = Object.assign(obj1, obj3, obj2);

// console.log(result);



