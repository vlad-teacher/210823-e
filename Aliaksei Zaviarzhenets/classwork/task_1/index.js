// 2. дан массив [2,4,5,6,1,2,7,3,4] на основе этого массива получить
// 2.1 массив в который войдут только те числа которые не повторялись ни одного раза [5, 6, 1, 7, 3]
// 2.2 массив в который войдут только те числа которые повторялись хотя бы один раз [2, 4]



const arr1 = [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4];
function getUnicElements(arr) { 
    const unicElem = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
            unicElem.push([arr[i]]);
        }
    }

    return unicElem;
}
const resalt = getUnicElements(arr1);
console.log(resalt)


function getDublicateElements(arr) {
    const dublicateElem = [];

    for (let i = 0; i < arr.length; i++) {
        if (
            arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i]) && 
            !dublicateElem.includes(arr[1])
        ) {
            dublicateElem.push(arr[i]);
        }
    }

    return dublicateElem;
}


const resalt2 = getDublicateElements(arr1);
console.log(resalt2);

