//1. Дан объект

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

//С помощью деструктуризации запишите в отдельны переменные: 
//1.1 Название города в котором находится авто 
//1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
//1.3 Поле high, объекта price 
//1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }


// 1.1
const { adress: { country: { city: { name: cityName } } } } = car;

// 1.2
const { adress: { region: [, , , fourthRegion = 'Arizona'] } } = car;

// 1.3
const { specs: { price: { high } } } = car;

// 1.4
const { specs: { fuelConsumption = { city: 12, mix: 10, country: 8 } } } = car;



//2. Даны 2 массива:
//let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
//let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

//2.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
//2.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
//2.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
//2.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 2.1
const userInput1 = prompt('Введите имя для добавления в people2:');
if (people1.includes(userInput1)) {
   people2.push(userInput1);
}

// 2.2
const userInput2 = prompt('Введите имя для удаления из people2:');
const indexToRemove = people2.indexOf(userInput2);
if (indexToRemove !== -1) {
   people2.splice(indexToRemove, 1);
}

// 2.3
const commonNames = people1.filter(name => people2.includes(name));

// 2.4
const uniqueCombinedArray = [...new Set([...people1, ...people2])];



//3.Напишите функцию hyphenDestroyer(), которая преобразует строки вида «my-short-string» в «my short string».
//То есть, дефисы удаляются и вместо них появляются пробелы.
Например:
hyphenDestroyer ("background-color") === 'background сolor';
hyphenDestroyer ("list-style-image") === 'list style image';
hyphenDestroyer ("-webkit-transition") === 'webkit transition';


function hyphenDestroyer(inputString) {
   return inputString.replace(/-/g, ' ');
}

console.log(hyphenDestroyer("background-color")); 
console.log(hyphenDestroyer("list-style-image")); 
console.log(hyphenDestroyer("-webkit-transition")); 

//4. Дан массив сonst arr = [2,5,7,12,62,23,88,153];
//выведите в консоль наибольшее ЧЕТНОЕ число из этого массива


const arr = [2, 5, 7, 12, 62, 23, 88, 153];

const maxEvenNumber = Math.max(...arr.filter(num => num % 2 === 0));

console.log(maxEvenNumber);

//5. Валерчик и Олежик очень любят поиграть в контр страйк,
//Даны два объекта, в которых записано сколько раз побеждал каждый из них
const valerchik = {
   wins: 213,
   loses: 123
};

const olejik = {
   wins: 51,
   loses: 64
};

//cоздать функцию getPercentage() которая принимает любой объект из выше перечисленных и возвращает строку с процентом побед и поражений в  виде 
//'процент побед 45%, процент поражений 55%'


function getPercentage(player) {
   const totalGames = player.wins + player.loses;
   const winPercentage = ((player.wins / totalGames) * 100).toFixed(2);
   const losePercentage = ((player.loses / totalGames) * 100).toFixed(2);

   return `процент побед ${winPercentage}%, процент поражений ${losePercentage}%`;
}

console.log(getPercentage(valerchik)); 
console.log(getPercentage(olejik)); 

//6. Написать функцию которая возвращает годовую оценку по любому предмету (функция должна принимать 4 числа)

function calculateAnnualGrade(quarter1, quarter2, quarter3, quarter4) {
   const averageGrade = (quarter1 + quarter2 + quarter3 + quarter4) / 4;
   return averageGrade;
}

const annualGrade = calculateAnnualGrade(85, 92, 88, 78);
console.log(`Годовая оценка: ${annualGrade}`);

//7. Написать функцию, которая принимает случайный
//двумерный массив (разной длины). Функция
//возвращает тот массив сумма элементов которого
//наибольшая.

function findMaxSumArray(arrays) {
   let maxSum = -Infinity;
   let maxSumArray = null;

   for (const array of arrays) {
       const sum = array.reduce((acc, current) => acc + current, 0);

       if (sum > maxSum) {
           maxSum = sum;
           maxSumArray = array;
       }
   }

   return maxSumArray;
}

const randomArrays = [
   [1, 2, 3],
   [4, 5, 6, 7],
   [8, 9, 10, 11, 12],
   [13, 14, 15]
];

const resultArray = findMaxSumArray(randomArrays);
console.log("Массив с максимальной суммой элементов:", resultArray);