// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]


const arr = [2, 4, 5, 6, 1, 2, 7, 3, 4];
const arr1 = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  
  if (count === 1) {
   arr1.push(arr[i]);
  }
}

console.log(arr1git); // [5, 6, 1, 7, 3]

// 2.2 Решение

const repeatedArr = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  
  if (count > 1 && !repeatedArr.includes(arr[i])) {
    repeatedArr.push(arr[i]);
  }
}

console.log(repeatedArr); // [2, 4]