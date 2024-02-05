// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]

/*const arr1 = [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4];


function getUnicElements(arr) { // [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4]
    const unicElem = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
            unicElem.push(arr[i]);
        }
    }

    return unicElem;
}

function getDublicateElements(arr) {
    const dublicateElem = [2];

    for (let i = 0; i < arr.length; i++) {
        if (
            arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i]) && // [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4]
            !dublicateElem.includes(arr[i])
        ) {
            dublicateElem.push(arr[i]);
        }
    }

    return dublicateElem;
}

const result = getUnicElements(arr1);
const result2 = getUnicElements([2,4,1,4,523,543,5,45,352,342,4,4]);*/


//declaretion and exspression ...



//строчная функция
/*function foo (a,b) {
    return a + b;
}

const test = function (a,b) {
    return a - b;
}

const smth = a => a + 2;
    console.log( smth(2) );*/



/*методы массивов
const arr = ['Valerchik', 'Olejik', 'John', 'Mitrofan'];

/*const result = arr.some((item) => {
    return item.length === 4;
});
console.log(result);*/

/*const result = arr.every((item) => {
    return item.length > 4;
});
console.log(result);*/

/*arr.find((item) => {
    return item === 'John';    
});
console.log(result);*/

/*const arr2 = [{
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
},];

const res = arr2.find(({name}) => {
    return name === 'John';
});

result.age = 999;//John age 999

console.log(result === arr2[2]);*/


/*.map , .filter , .sort (методы массивов)
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

//const arr3 = arr2.filter/*; */
//.map()
//sort
/*const number = [4, 6, 1, 2, 7, 9];
const arr3 = arr2.sort(({age}, {age, age2}) => age - age2);   
console.log(arr3);


console.log(result === arr2[2]);*/

//reduce
/*const result = arr.reduce(sum, {age}, index, mass => sum + age, 0); 
//dissrespekt for (not about forOf)
    console.log(result);*/
/*    const result = arr2.reduce((overall, {name, age}) => {
        return {
            ...overall,
            [name]: age
        };
    }, {});
    
    console.log(result); */

/*const foo = (a,b) => {
    return a + b;
};
    const foo2 = (a,b) => a + b; */



// 1. проверить есть ли в массиве объект у которого имя митрофан (some, find)
// 2. проверить всем ли есть 18 лет
// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6
// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'
/*const arr2 = [
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
//1
const mitrofan = arr2.find(({name}) => {
    return name === 'Mitrofan'
 })
console.log(mitrofan);

//2
// const isOver18 = arr2.every(({ age }) => age > 18);
// if (isOver18) {
//     console.log('всем больше 18');
// } else {
//     console.log('не всем есть 18');
// }; */




//let age = 2;



/*function foo() {

    //let age = 0;

    function bar () {
        age = 100;
        
}

    bar();
     console.log(age); //undefined
}

foo();*/

/*function foo() {
    let age = 100;
    function bar (age) {
        console.log(age);
}

    bar(); 
}

foo();*/


/*let b = 33;

function foo (test) {
let age = 100;
    function bar (age) {
        age = 222;
}
    bar(age);
}
foo();
    console.log(age);*/


/*let b = 33;
let c = 44;

function foo (test) {
    let age = 100;
        function bar (age) {
            age = 222;
            console.log(blabla);
    }
    bar(age);

    let blabla = 'blabla';
    }
    foo();
        console.log(age);*/



//ФУНКЦИЯ ВЫСШЕГО ПОРЯДКА
//callback - cb
//функция которая передаёться другому обЪекту как функцию

//let a = 1; // родитель cb

/*function foo (cb) { //bar
    //cb(); отдать утёнка не вариант
}
foo(bar);
function bar () {
    // {a: 1, foo}
    console.log(a);//is not defined
} */


/*function foo () {
    console.log('HELLO');
    cb();
}
    foo(() => console.log('asdasd'));

function bar () {
    console.log('WORLD');
}
function valerchik () {
    console.log('VALERCHIK');
}*/
/*за счёт callback можно гарантировать порядок
например что у нас было подобного: 
стрелки                                      */


/*Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.
let correctLogin = 'admin'

let userLogin = prompt('Введите логин:');

function cbTrue(){
    console.log('Добро пожаловать!')
};
function cbFalse(){
    console.log('Пароль неверный.')
}

function checkLogin(login, trueLogin, onCorrectLogin, onIncorrectLogin){
    if (login === trueLogin){
        onCorrectLogin();
    } else{
        onIncorrectLogin();
    }
}


checkLogin(userLogin, correctLogin, cbTrue, cbFalse);
checkLogin('user', 'user', () => console.log('test'));*/


//IIFE
//Immediately Invoked Function Expression
//анонимные самовызывающиеся функции
/*
(() => {
    let user = 'Valerchik';
})()

(function (a,b) {
    let user = 'Olejik'
})(2,3)

const foo = function () {};
    let user = 'valerchik'; 
*/

//map - позволяет преобразовать массив одного вида, в массив другого вида, при этом callback который мы передаем применяется к каждому элементу массива и изменяет его.

/*напишите функцию map*/
//если index чётный умножаем на 2
//такой вызов должен вернуть массив [2,2,6]
/*
const result = map([1,2,3], (item, index, arr) => {
    if (index % 2 === 0){
        return item * 2;
    } else {
        return item;
    }
});

function map(arr, cb) {
let resultArr = [];

    for (let i = 0; i < arr.length; i++){
        const futureElement = cb(mass[i], i, mass); 

        resultArr.push(futureElement);
    }

    return resultArr;

}

console.log(result);   */



//closure замыкание
//curry
//compose


/*let count = 0;
counter()//1
counter()//2
count = -100;
counter()//-99

const person = {
    name: 'John',
    age: 23 //999
}; */


/*
function foo () {
    let num = 0;

function innerCounter() {
}
    return innerCounter;
}

const counter = foo();

console.log(counter());//1
console.log(counter());
console.log(counter());
console.log(counter());
//задачка о замыкании      */



//curry, partially applied function
/*function foo (a,b,c) {
    return a + b + c;
}

foo(1,2,3);
foo(1)(2)(3);       //[1,2,3][0] подобное или например [[1],[2],3]][1][0](вернёться массив в котором 2)
//так вот в этой ситуации будет рядом функция*/

/*function foo (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log( foo(1)(2)(3) );*/
//карированая функция (матрёшка где самая маленькая имеет доступ к другим)
//каждая принимает 1 аргумент
//если больше то partially applied function

//!!debug фишка!!
//куча маленьких функций лучше потому что их можно подменять и т.д

//partially applied function
//смысл в том что это частично вычесленая функция и её можно ещё где то использовать
//например:
//самое тяжёлое вычисление это 1
//2 тоже
//3 более лайтовое потому что оно меняеться
/*const tmpResult = foo(1,2);

tmpResult(1,2,5);
tmpResult(1,2,10);
tmpResult(1,2,100);
tmpResult(1,2,993293);

function foo (a,b) {
    const arr = [];
    for (let i = 0; i < (a*b)**2; i++){
        arr.push(new Array(100).fill(1).map(() => a*i));
    }

    return function (c) {
        arr[0] = arr[0] + c;
        
        return arr;
    }
} //этот ад нужен чтобы потом было легче делать что то лайтовое */


//чистая функция
/*function foo (a,b) {
    console.log(a,b);

    return a + b;
}
foo(2,3);//5
foo(2,3);//5*/
//console.log считаеться (не чистой) side эффектом кроме себя она занимаеться ещё какким то выводом в консоль
//из за возврата undefined и не только
//вот теперь это чистая функция

/*
sum(2,3);//5
sum(2,3);//5

function foo (a,b) {
    const result = a + b;

    return result;
}*/


/*не чистая
const person = {
    name: 'John',
    age: 23
}

function sum (a,b) {
    const result = a + b + person.age;

    return result;
}
sum(2,3);//5
sum(2,3);//5
//она не должна колабиться с кем то кто скопиться 
//функция досихпор нуждаеться в дополнении             */


/*const person = {
    name: 'John',
    age: 23
}

function sum (obj, a, b) {
    const result = a + b + obj.age;

    return result;
}
sum(2,3);//5
sum(2,3);//5
//чистая функция потому что нету side эффектов и ей никуда не надо обращатся  */


/*const person = {
    name: 'John',
    age: 23
}

function sum (obj, a, b) {
    obj.age = a + b;

    return obj;
}
sum(person, 2, 3);
sum(person, 2, 3);
//происзодит мутация обьекта из за того что мы ей что то дали = не чистая


const person = {
    name: 'John',
    age: 23
}

function sum (obj, a, b) {
    obj.age = a + b;

    return {
        ...obj,
        age: a + b
    };
}
sum(person, 2, 3);
sum(person, 2, 3);
//та же мутация только теперь сыллка на него другая (не чистая)  */


//deep object copy/clone(new)
//чтобы вложенные обьекты не смутировали
/*
const person = {
    name: 'Valerchik',
    size: {
        height: 23,
        width: 51
    },
    adress: {
        city: 'Boston',
        precise: {
            street: 'Sovetskaya',
            zipCode:  4324234
        }
    },
    tech: [{a: 2}, {b: 3}]
};

//const personCopy = {
//    ...person,
//    size: {
//        ...person.size            //лениво но это прям в лоб решение
//    }
//};
//    console.log(person, personCopy);

function deepClone (obj) {
    const objCopy = {};
    
    for (const key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        objCopy[key] = deepClone(obj[key]);
    } if (Array.isArray(obj[key])){ 
        objCopy[key] = obj[key].map((obj) => deepClone(obj));
    } else {
        objCopy[key] = obj[key];
    }
}

    return objCopy;
}
const result = deepClone(person);
//console.log(result.adress.precise === person.adress.precise);//круто что false значит deep clone работает
    console.log(result.tech[0] === person.tech[0]);   */


/*func(foo)
const result = foo(); //func

function foo () {
    foo();
}                               */


//counter(5) //!for

/*
function counter (a) {

    if (a !== 1) {
        counter(a - 1);
    }
}

counter(5);
*/



/*function doubleNum (arr){
    return arr.filter((element, index, array) => {
        return array.lastIndexOf(element) !== index;
    });
}
const arrNumbers = [1,1,1,2];
const arrDoubleNumbers = doubleNum(arrNumber);
    console.log('массив из тех чисел которые повторялись ${arrDoubleNumbers}');               */

//эта же задача через reduce

/*const arr = [1,1,2,2,4,5,6,7,7];

function getUniqueDoubleNum (arr) {
    return arr.reduce((resultArr, num) => {
        const doesNumReapeats = arr.indexof(num) !== arr.lastIndexOf(num);
        const isNumAlreadyFound = resultArr.includes(num);

    if (doesNumReapeats && !isNumAlreadyFound){
        resultArr.push(num)
    }

    return resultArr;
 }, []);
}
    console.log(getUniqueDoubleNum(arr));  */
//1 берём любой элемент
//2 проверяем на совпадение
//3 если совпадение есть и этого элемента ещё нет в результирующем массиве то
//добавляем в результирующий массив если нет пропускаем элемент



/*const names = [{user: 'Valerchik'}, {user: 'Olejik'}, {user: 'John'}];

const result = names.indexOf();
const result2 = names.findIndex((obj) => obj.user === 'Olejik');
    console.log(result2);           */



/*const arr = [{a: 1}, {b: 2}];

    let obj = arr[0];//дубликат

//если obj тоже будет null то уже можно полностью удалять замок

    arr[0] = null; //оригинал потеряли

console.log(obj); */


// 1. написать функию toogleMe(), которая при каждом своем вызове
// возвращает чередующийся результат (true, false, true, false ...)
/*function makeToogleMeFunc () {
    let boo = false;

    return function () {
        boo = !boo;

        return boo;
    };
}

let toogleMe = makeToogleMeFunc();

console.log(toogleMe());
console.log(toogleMe());
console.log(toogleMe());
console.log(toogleMe());
console.log(toogleMe());     */


// 2. 
// создать функцию которая возвращает числа следующим образом:
// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14
/*function makeCounterFunc (){
    let count = 0;
    function nextNum (num){
        if(num !== undefined){
            count = num;
        }
        count++;
        return count;
    }
    return nextNum;
}
let counter = makeCounterFunc();
console.log(counter());//1
console.log(counter());//2
console.log(counter(7));//8
console.log(counter());//9
console.log(counter());//10   */