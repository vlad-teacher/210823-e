//Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к
// каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк.
// Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.

// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив.
// 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

let personDates = ["Jaden", "Will"];
function addSurname(arr, cb1, cb2) {
  let getSurname = [];

  arr.forEach((items, index) => {
    getSurname.push([items]);
    getSurname[index][index + 1] = " Smith ";
  });

  cb1(getSurname, cb2);
}

function addAddress(arr, cb2) {
  let getAddress = [];

  arr.forEach((items, index, massive) => {
    massive[index].splice(0, 0, " Mr ");
    getAddress.push(items.join(""));
  });

  cb2(getAddress);
  console.log(getAddress, "in function addAddress");
}

function callByAddress(arr) {
  arr.map((item) => {
    alert(item);
  });
}

addSurname(personDates, addAddress, callByAddress);

//1. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]
let numbers = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

function myFuncName(mass) {
  let uniqueEls = [];
  let repeatEls = {};

  mass.reduce(
    (accu, item) => {
      if (!accu[0].includes(item)) {
        accu[0].push(item);
      } else {
        accu[1][item] = item;
      }
      return accu;
    },
    [uniqueEls, repeatEls]
  );

  repeatEls = Object.values(repeatEls);
  console.log(repeatEls);
  return repeatEls;
}

myFuncName(numbers);

//2. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

let nestedArray = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [8, 9, 10, 141],
  [222, 333, 444],
  [11, 12, 123],
  [22, 3, 4, 6],
  [44, 55, 123],
];

let nestedArraySums = nestedArray.map((item, index) => {
  return item.reduce((accu, e, i) => {
    accu += e;
    return accu;
  }, 0);
});

let maxSumIndex = nestedArraySums.indexOf(Math.max(...nestedArraySums));

let maxSum = nestedArray[maxSumIndex];
console.log(maxSum, "MaxSum");

// 3. Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

let randomNumbers = [2, 4, 5, 8, 10, 12, 14, 16, 18, 19, 21];

let filteredArray = randomNumbers.filter((item) => {
  return item > 9 && item % 2 == 0;
});

console.log(filteredArray, "FilteredArray");

// 4, Дан массив объектов:

const fbTeam = [
  {
    playerName: "Messi",
    team: "Barcelona",
  },
  {
    playerName: "Suarez",
    team: "Barcelona",
  },
  {
    playerName: "Ronaldo",
    team: "Juventus",
  },
  {
    playerName: "Buffon",
    team: "Juventus",
  },
  {
    playerName: "Valerchik",
    team: "Vedrich97",
  },
  {
    playerName: "Gonsalo",
    team: "Juventus",
  },
  {
    playerName: "Pedro",
    team: "Chelsea",
  },
  {
    playerName: "Zuma",
    team: "Chelsea",
  },
  {
    playerName: "Rico",
    team: "PSG ",
  },
];

// С помощью метода reduce() преобразуйте его в объект вида:

// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
//  }
// Игроки должны быть сгруппированы по командам в соответствующие поля
// объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)

let teamPlayers = fbTeam.reduce((accu, { playerName, team }) => {
  accu[team] = [...(accu[team] || []), playerName];
  return accu;
}, {});

console.log(teamPlayers);
