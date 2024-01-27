// # Callback

// + Написать функцию которая принимает массив строк (имена) и два колбэка.
// функция добавляет к каждому элементу массива фамилию "Smith" после чего передает
// получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное
// им значение нужно передать во второй колбэк.

// **1ый колбэк**: это функция которая принимает массив строк, добавляет к каждой строке
// "Mr. " и возвращает получившийся массив.
// **2ой колбэк**: функция которая принимает массив строк и выводит через alert() каждый
// элемент массива.

// const arrayNames = ["John", "Evlampii", "Agafon", "Sviatozar", "Ratibor"];

// function plusSmith(arr, cb1, cb2) {
//   let newArrSmith = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArrSmith.push(arr[i] + " Smith");
//   };

//   return cb2(cb1(newArrSmith));
// }
// plusSmith(arrayNames, plusMr, allert);

// function plusMr(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push("Mr. " + arr[i]);
//   }
//   return newArr;
// }

// function allert(arr) {
//   arr.forEach((element) => {
//     alert(element);
//   });
// }

// ## Arrays

// +1. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном.
// ```js
// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]
// ```
// const arrNumbers = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

// function findDuplicateNumbers(array) {
//     let duplicateNumbers = [];
//     let uniqueNumbers = [];

//     array.forEach(function (number) {
//         if (uniqueNumbers.includes(number)) {
//             if (!duplicateNumbers.includes(number)) {
//                 duplicateNumbers.push(number);
//             }
//         } else {
//             uniqueNumbers.push(number);
//         }
//     });
//     return duplicateNumbers;
//   };
// console.log(findDuplicateNumbers(arrNumbers));

// 2. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив
// `reduce()` и вернуть тот массив сумма элементов которого
// наибольшая.

const twoDimArr = [
  [12, 43, 68, 1, -5, 0, 12],
  [78, -4],
  [0, -2, 4],
  [34, 8],
  [-6, 0, 16],
  [22],
  [567, 85, -300],
  [45, 94, 14, -56, 0],
];

const sumArr = (array) =>
  array.reduce((acc, currentValue) => acc + currentValue, 0);

const maxSum = twoDimArr.reduce((maxArr, currentArr) => {
  const currentSum = sumArr(currentArr);
  const maxSum = sumArr(maxArr);
  
  return currentSum > maxSum ? currentArr : maxArr;
}, []);
console.log(maxSum);
// +3. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// const arrNumbers = [10, 14, 1, 42, 44, 5, 1, 9, 6, 74, 77, 74, 33];
// const result = arrNumbers.filter((number) => number > 9 && number % 2 === 0);
// console.log(result);

// +4. Дан массив объектов:
// ```js
// const fbTeam = [
//   {
//     playerName: "Messi",
//     team: "Barcelona",
//   },
//   {
//     playerName: "Suarez",
//     team: "Barcelona",
//   },
//   {
//     playerName: "Ronaldo",
//     team: "Juventus",
//   },
//   {
//     playerName: "Buffon",
//     team: "Juventus",
//   },
//   {
//     playerName: "Valerchik",
//     team: "Vedrich97",
//   },
//   {
//     playerName: "Gonsalo",
//     team: "Juventus",
//   },
//   {
//     playerName: "Pedro",
//     team: "Chelsea",
//   },
//   {
//     playerName: "Zuma",
//     team: "Chelsea",
//   },
//   {
//     playerName: "PSG",
//     team: "Rico",
//   },
// ];

// const fbPlayersByTeams = fbTeam.reduce((acc, currentValue) => {
//   acc[currentValue.team] = acc[currentValue.team] || [];
//   acc[currentValue.team].push(currentValue.playerName);
//   return acc;
// }, {});

// console.log(fbPlayersByTeams);

// ```
// С помощью метода `reduce()` преобразуйте его в объект вида:

// ```js
// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
// ```

// Игроки должны быть сгруппированы по командам в соответствующие поля объекта `fbPlayersByTeams`.
// Под `{}` в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)
