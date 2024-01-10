// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]

const arr1 = [2, 4, 5, 6, 1, 2, 7, 3, 4];
const unicElem = [];
const dublicateElem = [];

for (let i = 0; i < arr1.length; i++) {
   if (arr1.lastIndexOf(arr1[i]) === arr1.indexOf(arr1[i]) ) {
    unicElem.push(arr1[i]);
   }  else {
    if (!dublicateElem.includes(arr1[i])) {
       dublicateElem.push(arr1[i]); 
    }
    
   }
}

console.log(unicElem, dublicateElem);