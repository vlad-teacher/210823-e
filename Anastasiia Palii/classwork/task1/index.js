// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]


const inputArray = [2, 4, 5, 6, 1, 2, 7, 3, 4];
const arr = [];

// 2.1
const uniqueNumbers = [];

for (const num of inputArray) {
    if (!arr.includes(num)) {
        arr.push(num);
        uniqueNumbers.push(num);
    } else {
        const index = arr.indexOf(num);
        arr.splice(index, 1);
    }
}


// 2.2
const repeatedNumbers = [];

for (const num of inputArray) {
    if (!arr.includes(num)) {
        arr.push(num);
    } else if (!repeatedNumbers.includes(num)) {
        repeatedNumbers.push(num);
    }
}
