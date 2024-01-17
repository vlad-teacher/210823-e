// 1. дан массив случайных числе найти наибольшее число которое делится на 3
// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]



//  1.
let arr2 = [23,558, 44, 556, 561, 2, 11, 100];

let maxNum = null;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 === 0) {
        maxNum = arr2[i];
        break;
    }
}

if (maxNum !== null) {
    for(let i = 0; i < arr2.length; i++) {
        if(arr2[i] % 3 === 0 && maxNum < arr2[i]){
            maxNum = arr2[i];
        }
    }    
}
console.log(maxNum);

// 2.
let arr3 = [2,4,5,6,1,2,7,3,4];
 let uniqueArr = [];

 for (let i = 0; i< arr3.length; i++) {
    let isUnique = true;
    for(let j = 0; j <arr3.length; j++){
        if(arr3[i] === arr3[j] && i !== j){
            isUnique = false;
            break;
        }
    }
    if(isUnique){
        uniqueArr.push(arr3[i]);
    }
 }
 console.log(uniqueArr);


//  2.1 массив тот же

let repeatArr = [];

for(let i = 0; i < arr3.length; i++){
    for(let j= i + 1; j < arr3.length; j++){
        if(arr3[i] === arr3[j]){
            if (!repeatArr.includes(arr3[i])){
                repeatArr.push(arr3[i]);
            }
            break;
        }
    }
}
console.log(repeatArr);
