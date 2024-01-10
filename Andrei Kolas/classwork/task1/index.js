// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]


const arr228 = [2,4,5,6,1,2,7,3,4];


function getUniqueElem (arr) {

   const UniqueElem = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
         UniqueElem.push(arr[i]);
      }
   }
   return UniqueElem;
}


console.log(getUniqueElem(arr228));