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
// };
//3, 4 НА ДОМАШКУ