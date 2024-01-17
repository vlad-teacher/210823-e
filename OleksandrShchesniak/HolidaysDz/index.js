// 1. Дан объект
// ...
// С помощью деструктуризации запишите в отдельны переменные: 
// 1.1 Название города в котором находится авто 
// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
// 1.3 Поле high, объекта price 
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }

 const car = {
     model: 'tesla',
     adress: {
         country: {
             city: {
                 name: 'Boston',
                 street: {
                     name: 'pushkina',
                     number: 2
                 }
             }
         },
         region: ['Iowa','Texas','California']
     },
     specs: {
         price: {
             low: 2000,
             mid: 3000,
             high: 5000
         },
         engine: {
             power: 400,
             lowPower: 100
         }
     }
 };

 const {
    adress: {
        country: {
            city : {name: Kyiv}
        },
        region: [, , , fourthRegion = 'Arizona']
    },
    specs:{
        price: {high}
    },
    specs: {fuelConsumption = {city: 12, mix: 10, country: 8} }
 } = car;

// 2. Даны 2 массива:
// ...
// 2.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 2.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 2.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 2.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

const newNameToAdd = prompt('Введите имя для добавления в people2:');
if (people1.includes(newNameToAdd)) {
  people2.push(newNameToAdd);
}

const nameToRemove = prompt('Введите имя для удаления из people2:');
const indexToRemove = people2.indexOf(nameToRemove);
if (indexToRemove !== -1) {
  people2.splice(indexToRemove, 1);
}

const commonNames = people1.filter(name => people2.includes(name));

const uniqueNames = [...new Set([...people1, ...people2])];

// 3.
// Напишите функцию hyphenDestroyer(), которая преобразует
// строки вида «my-short-string» в «my short string».

function hyphenDestroyer(inputString) {
    return inputString.replace(/-/g, ' ');
  }

// 4. Дан массив сonst arr = [2,5,7,12,62,23,88,153];
// выведите в консоль наибольшее ЧЕТНОЕ число из этого массива

const arr = [2, 5, 7, 12, 62, 23, 88, 153];

const maxEvenNumber = Math.max(...arr.filter(num => num % 2 === 0));
  
console.log('Наибольшее четное число в массиве:', maxEvenNumber);

// 5. cоздать функцию getPercentage() которая принимает любой 
// объект из выше перечисленных и возвращает строку с процентом побед и поражений

function getPercentage(player) {
  const totalGames = player.wins + player.loses;
  const winPercentage = ((player.wins / totalGames) * 100).toFixed(2);
  const losePercentage = ((player.loses / totalGames) * 100).toFixed(2);

  return `Процент побед ${winPercentage}%, процент поражений ${losePercentage}%`;
}

const valerchik = {
  wins: 213,
  loses: 123
};

const olejik = {
  wins: 51,
  loses: 64
};

console.log(getPercentage(valerchik));
console.log(getPercentage(olejik));

// 6. Написать функцию которая возвращает годовую оценку по любому предмету (функция должна принимать 4 числа)

function calculateYearGrade(firstQuarter, secondQuarter, thirdQuarter, fourthQuarter) {
    // Предположим, что оценки представляют собой числа от 0 до 100
  const averageGrade = (firstQuarter + secondQuarter + thirdQuarter + fourthQuarter) / 4;
  return averageGrade;
}
  
// Пример
const firstQuarterGrade = 85;
const secondQuarterGrade = 92;
const thirdQuarterGrade = 88;
const fourthQuarterGrade = 78;
  
const yearGrade = calculateYearGrade(firstQuarterGrade, secondQuarterGrade, thirdQuarterGrade, fourthQuarterGrade);
console.log('Годовая оценка:', yearGrade);

// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины). Функция
// возвращает тот массив сумма элементов которого
// наибольшая.

function findMaxSumArray(randomArray) {
    if (randomArray.length === 0) {
      return null;
    }
  
    let maxSum = -Infinity;
    let maxSumArray = randomArray[0];
  
    randomArray.forEach(subArray => {
      const currentSum = subArray.reduce((acc, val) => acc + val, 0);
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSumArray = subArray;
      }
    });
  
    return maxSumArray;
  }
  
  // Пример
  const randomArray = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9],
    [10, 11, 12, 13, 14]
  ];
  
  const result = findMaxSumArray(randomArray);
  console.log(result);