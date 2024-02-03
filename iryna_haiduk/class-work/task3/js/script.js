
// let age = 50;

// function foo() {
//     let age = 100;

//     function bar (age) {
//         age = 222;
//     }

//     bar(age);

//     console.log(age);
// }


// foo();

// console.log(age);

let a = 1;

function foo(cb) {
    let a = 2;

    cb();
}

foo(bar);

function bar() {
    console.log(a);
}

console.log(bar()); //undefined


// Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, 
// введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 
// 4 – callback, который вызовется если логин ложный.

let correctLogin = 'admin';

let userLogin;

function checkLogin(login, trueLogin, onCorrectLogin, onIncorrectLogin){
    if (login === trueLogin){
        onCorrectLogin();
    } else{
   //     onIncorrectLogin();
    }
}

function cbTrue(){
    console.log('Добро пожаловать!')
};
function cbFalse(){
    console.log('Пароль неверный.')
}

checkLogin(userLogin, correctLogin, cbTrue, cbFalse);
checkLogin('user', 'asdad', () => console.log('test'));


(()=> {
    console.log('I work');
})();


