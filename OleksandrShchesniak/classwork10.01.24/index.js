// 1. дан массив случайных числе найти наибольшее число которое делится на 3

function maxMultiplyThree(numbers){
    let maxMultiplyThree = 0;

    for (let i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i];
        
        if(currentNumber % 3 === 0 && currentNumber > maxMultiplyThree){
            maxMultiplyThree = currentNumber;
        }
    }
    return maxMultiplyThree;
}

function generateRndNumArr(lenght, min, max){
    const randomNums = [];
    for (let i = 0; i < lenght; i++){
        const randomNum = Math.floor(Math.random()*(max - min + 1)) + min;
        randomNums.push(randomNum);
    }
    return randomNums;
}

const randomNum = generateRndNumArr(10, 1, 100);
const result = maxMultiplyThree(randomNum);

console.log("Массив случайных чисел:", randomNum);
console.log("Наибольшее число, которое делится на 3:", result);

// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза

const arr = [2,4,5,6,1,2,7,3,4];
const unicElem = [];
const dublicateElem = [];

function getUnicElements(arr){
    for (let i = o; i<arr.lenght; i++){
        if(arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])){
            unicElem.push(arr[i]);
        }
    }
}

// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз

const arr1 = [2,4,2,2,5,6,6,1,2,7,3,4];

function getDuplicateElements(arr) {
    for (let i = 0; i < arr.lenght; i++){
        if( arr.lastIndexOf(arr[i]) != arr.indexOf(arr[i]) && !dublicateElem.includes(arr[i])){
            dublicateElem.push(arr[i]);
        } 
    }
}

getUnicElements(arr1);
getDublicateElements(arr1);
console.log(unicElem, dublicateElem);
