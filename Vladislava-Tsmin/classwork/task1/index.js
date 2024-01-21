// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]
const arr1 = [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4];


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
const result2 = getUnicElements([2, 4, 1, 4, 523, 543, 5, 45, 352, 342, 4, 4]);


//17.01
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

// 1. проверить есть ли в массиве объект у которого имя митрофан (some, find)
// 2. проверить всем ли есть 18 лет
// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6
// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'

const mitrofan = arr2.find(({ name }) => name === 'Mirtofan')
console.log(mitrofan);

const isOver18 = arr2.every(({ age }) => age > 18);
if (isOver18) {
    console.log('Всем больше 18');
} else {
    console.log('Косу то меньше 18');
}