// const arr = [23,2,45,1,1];
// const arr2 = [5,1,43,54,6564];

// function getMaxFromArray (myBestArray) { // let myBestArray = arr2;
//     let max = myBestArray[0];

//     for (let i = 0; i < myBestArray.length; i++) {
//         if (myBestArray[i] > max) {
//             max = myBestArray[i];
//         }
//     }

//     return max;
// }

// console.log(getMaxFromArray(arr));
// console.log(getMaxFromArray(arr2));
// console.log(getMaxFromArray(arr3));

// const arr = [23,2,45,1,1];
// const arr2 = [5,1,43,54,6564];

// function plitochnikKladi (plitka) {

// if (!Array.isArray(plitka)) {
//     console.log('ERROR!');
//     return; //! rest, spread decl
// }

//     for (let i = 0; i < plitka.length; i++) {
//         console.log(plitka[i]);
//     }

// }

// plitochnikKladi();

// plitochnikKladi(arr2);
// plitochnikKladi(['a','b','c']);
// plitochnikKladi( arr2 );
// plitochnikKladi();
// plitochnikKladi();

// function square (a, b = 10, c = 0) {
//     return a + b + c;
// }

// const result =  2 / 1 + square(1,2,3);

// console.log( square(1,2,3) );

// function declaration
// function foo (a, b) {
//     return a + b;
// }

// function expression
// const test = function func (a,b) { // !
//     return a - b;
// };

// test();

// console.log(test(10,5));
// console.log(func(10,5));

// function foo (a, b) {
//     return a + b;
// }

// const test = foo;

// console.log(test === foo);

// const person = {
//     name: 'Valerchik',
//     age: 2,
//     city: 'Berlin'
// };

// const person2 = {
//     name: 'Olejik',
//     age: 12,
//     city: 'Paris'
// };

// function greet ({name, city} = {english: 'b2'}) {
//     console.log(`Hello ${name} from ${city}`);
// }

// greet(person);
// greet();

// let person = {
//     name: 'Valerchik',
//     age: 2,
//     city: 'Berlin'
// };

// function foo (obj) { // let obj = person;
//     obj = null;
// }

// foo(person);

// console.log(person);

// const set = new Set([10,21,3,2,3]);

// const arr = [...set];
// const arr2 = Array.from(set);

// set.add(21);
// set.add(21);
// set.add(21);

// const person = {
//     name: 'Valerchik',
//     age:23,
// };

// const dog = {
//     nick: 'Bobik',
//     age: 100
// };

// const sobaki = new Map([['a',1], ['b', 2]]);

// sobaki.set(person, dog);

// console.log(sobaki.get(person));

// console.log( set.keys() );

// for (let item of set.values() ) {
//     console.log(item);
// }

// 1. дан массив случайных числе найти наибольшее число которое делится на 3
// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]

// let arr = [23,558, 44, 556, 561, 2, 11, 100000];

// let maxNum = null;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         maxNum = arr[i];
//         break;
//     }
// }

// if (maxNum !== null) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 3 === 0 && maxNum < arr[i]){
//             maxNum = arr[i];
//         }
//     }
// }

// const arr = ['Valerchik', 'Olejik', 'John', 'Mitrofan'];

// const result = arr.forEach((item, index, mass) => mass[index] = 100);

// const result = arr.some((item) => {
//     return item.length === 4;
// });

// const result = arr.every((item) => {
//     return item.length > 4;
// });

const arr = ["Valerchik", "Olejik", "John", "Mitrofan"];

const numbers = [4,6,1,2,7,9];

const arr2 = [
  {
    name: "Valerchik",
    age: 23,
  },
  {
    name: "Olejik",
    age: 90,
  },
  {
    name: "John",
    age: 12,
  },
  {
    name: "Mitrofan",
    age: 35,
  },
];



const result = arr2.reduce((overall, {name, age}) => {
    return {
        ...overall,
        [name]: age
    };
}, {});

console.log(result);


// const result = arr2.reduce((sum, {age}) => sum + age, 0);

// const arr3 = arr2.sort(({age}, {age: age2}) => age - age2);

// console.log(arr3);

// const arr3 = arr2.filter(({age}) => age > 18);

// const arr3 = arr2.map((item) => item.name);

// const result = arr2.find(({name}) => {
//     return name === 'John';
// });



