//NEW FILE FOR HOMEWORK


//compose
//HOF higer order function
//obj methods


//HOF
//функция у которой аргумент вызывает или возвращает другую функцию
/*const add = (a,b) => a + b; //return a + b;
//console.log(2,5);       2 5
add(2,3);               //5
//superAdd(2,3);          5
//2
//3
const superAdd = (a,b) => {//зависит от add(теперь)
    console.log(a);
    console.log(b);

return add(a,b);
}; */


// const add = (a,b) => a + b;
// function withLogger (originalFunc) {
//     return function (a,b) {
//         return originalFunc(a,b);
//     };
// }
//     superAdd(2,3); //5


/*функция withLogger должна принимать оригинальную функцию add
widthLogger должен возвращать НОВУЮ функцию которая принимает a,b
сохраняет работу оригинальной функции (ее нужно будет вызвать)
и возвращает рepультат оригинальной функции
function withLogger (originalFunc) {
    function anotherFunc(...smth){
        smth.forEach((item) => console.log(item))
        return originalFunc(...smth);
    }
    return anotherFunc;
}
const result = superAdd(2,3);
    console.log(result);  */


//функциональное программирование
//например что можно держать функцию в массиве и потом с ней делать приколюхи
/*const obj = {
    a: 1,
    b: 2,
    c: 3
};
function a (obj) {
    obj.a = 1;
    return obj;
}
function b (obj) {
    obj.b = 2;
    return obj;
}
function c (obj) {
    obj.c = 3;
    return obj;
}
const aAndB = [a,b];
const bAndC = [b,c];
const all = [a,b,c]; //c(b(a())) //pipe a(b(c()))
const myObj = all.reduce((res, f) => f(res),{});
    console.log(myObj);    */




/*'use strict';   //строгий режим (без него у нас будет window, а нам он не нужен в задачке)
function code () {
    console.log(this);                               //ссылка на того кто её вызывает
//а вот если удалить валерку и митрофана(не считая вызов функции) будет наш любимый undefined
    console.log('${this.userName} codes');
}

const person = {
    userName: 'Valerchik',
    home: 'Krysha',
    isOboltus: false,
    code                        //аналог code: code
};
const person2 = {
    userName: 'Mitrofan',
    home: 'Pod Mostom',
    isOboltus: true,
    code                        //аналог code: code
};
//codeFoo();  //при таком вызове strict бесхозном будет undefined (всё тип топ)
const dog = {
    userName: 'Bobik',
    poroda: 'ovcharka',
    code: person.code
};

function makeThemCode (fe, be ,qa) {
    console.log('CODE EVERYBODY!');
    fe();
    be();
    qa();
}
// makeThemCode(person.code, person2.code, dog.code);  */



//1. 'Valerchik codes on PHP, Wordpress, Drupal';
'use strict';
const person = {
    userName: 'Valerchik',
    home: 'Krysha',
    isOboltus: false,
    code,
    stack: ['PHP', 'Wordpress', 'Drupal']
};


const person2 = {
    userName: 'Mitrofan',
    home: 'Pod Mostom',
    isOboltus: true,
    code,
    stack: ['CSS', 'JS', 'React']
};

function code () {
    console.log('${this.userName}  codes on: ');
}

