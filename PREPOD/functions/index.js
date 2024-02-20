
// closure замыкание


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

const result = map([1,2,3], (item, index, arr  ) => {
    if (index % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});


function map (mass, cb) {
    let resultArr = [];

    for (let i = 0; i < mass.length; i++) {
        const futureElement = cb(mass[i], i, mass);

        resultArr.push(futureElement);
    }

    return resultArr;
}

console.log(result);

