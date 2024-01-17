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


/*
//declaretion
function foo (a,b) {
    return a + b;
}
foo();


//expression
bar();
const bar = function (a,b) {
    return a - b;
}  */


/*
function foo (a,b) { //a = undefined   b = undefined
    return a + b; //NaN + NaN = NaN (ого неожидано :3 )
}
const test = foo();
    console.log(test); //NaN 
//ЛИБО
function foo (a = 0, b = 0) { 
    return a + b;
}
const test = foo(2, 8);
    console.log(test);*/


//дестуктуризация
/*
const person = {
    userName: 'Valerchik',
    age: 23,
    size: {
        width:23,
        height:512
    }
};    

function makeBirthday (obj) { //let obj = person
    obj.age++;
    
    return obj;
}

const { age } = makeBirthday(person);
    console.log(age);  */