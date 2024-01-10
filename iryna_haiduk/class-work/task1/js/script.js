// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]



// for (let i = 0; i < arr1.length; i++) {
//     if (arr1.lastIndexOf(arr1[i]) === arr1.indexOf(arr1[i])) {
//         unicElem.push(arr1[i]);
//     } else {
//         if (!dublicateElem.includes(arr1[i])) {
//             dublicateElem.push(arr1[i]);
//         }

//     }
// }

const arr1 = [2, 4, 5, 6, 1, 2, 7, 3, 4];
const unicElem = [];
const dublicateElem = [];

function getUnicElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
            unicElem.push(arr[i]);
        }
    }
}

function getDublicateElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i]) && !dublicateElem.includes(arr[i])) {
            dublicateElem.push(arr[i]);
        }
    }
}

getUnicElements(arr1);
getDublicateElements(arr1);

console.log(unicElem, dublicateElem);

// дан массив случайных чисел, пользователь вводит любое число (prompt) найти в массиве число, 
// которое наиболее близко к введенному

const randomArr = [2, 5, 7, 8, 9, 23, 67, 89];
const userNumber = +prompt('Enter a number', '');

const diffArr = [];

for (let i = 0; i < randomArr.length; i++) {
    diffArr.push(Math.abs(userNumber - randomArr[i])); 
}

const minDiff = Math.min(...diffArr);
const closeNumberArrs = [];

for (let i = 0; i < diffArr.length; i++) {
    if (diffArr[i] === minDiff) {
        closeNumberArrs.push(randomArr[i]);
    }
}


console.log(`Close numbers are : ${closeNumberArrs}`);
