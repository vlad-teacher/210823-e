
const arrayNames = ["John", "Phill", "Vladiskav", "Anatoliy", "Valerchik"];

 function plusSmith(arr, cb1, cb2) {
   let newArrSmith = [];
   for (let i = 0; i < arr.length; i++) {
     newArrSmith.push(arr[i] + " Smith");
   };

   return cb2(cb1(newArrSmith));
 }
 plusSmith(arrayNames, plusMr, alert);

 function plusMr(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
     newArr.push("Mr. " + arr[i]);
   }
   return newArr;
 }

 function alert(arr) {
   arr.forEach((element) => {
     alert(element);
   });
 }

//1. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. 

let myFuncName = [1,1,1,4,4,5,1,6,6,74,74,74,3];

function findDuplicateNumbers(array) {
    let duplicateNumbers = [];
    let uniqueNumbers = [];

    array.forEach(function (number) {
        if (uniqueNumbers.includes(number)) {
            if (!duplicateNumbers.includes(number)) {
                duplicateNumbers.push(number);
            }
        } else {
            uniqueNumbers.push(number);
        }
    });

    return duplicateNumbers;
}

let origArray = findDuplicateNumbers(myFuncName);
console.log(origArray)

// 2. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив
// `reduce()` и вернуть тот массив сумма элементов которого
// наибольшая.

const randomArray = Array.from({length: 8}, 
    () => Array.from({length: Math.floor(Math.random()*6)+1}, 
    () => Math.floor(Math.random()*10)));

const maxSumArray = randomArray.reduce((maxSumArray, currentArray) => (maxSumArray.reduce((a,b) => a+b,0) > currentArray.reduce((a,b) => a + b,0) ? maxSumArray : currentArray));
console.log(maxSumArray);

// 3. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

const arr = [2, 10, 33, 34, 75, 80, 15, 16, 100, 98];

function doubleNum(arr){
  return arr.filter((element, index, array) => {
    return array.lastIndexOf(element) !== index;
  });
}
const arrDoubleNum = doubleNum(doubleNum);
console.log(arrDoubleNum)


// 4. Дан массив объектов:

const fbTeam = [
    {
    playerName:"Messi",
    team:"Barcelona"
    },
    {
    playerName:"Suarez",
    team:"Barcelona"
    },
    {
    playerName:"Ronaldo",
    team:"Juventus"
    },
    {
    playerName:"Buffon",
    team:"Juventus"
    },
    {
    playerName: 'Valerchik',
    team: 'Vedrich97'
    },
    {
    playerName:"Gonsalo",
    team:"Juventus"
    },
    {
    playerName:"Pedro",
    team:"Chelsea"
    },
   {
    playerName:"Zuma",
    team:"Chelsea"
    },
    {
    playerName:"PSG",
    team:"Rico"
    }
];

const fbPlayersByTeams = fbTeam.reduce((acc, currentValue) => {
acc[currentValue.team] = acc[currentValue.team] || [];
acc[currentValue.team].push(currentValue.playerName);
return acc;
}, {});

console.log(fbPlayersByTeams);
