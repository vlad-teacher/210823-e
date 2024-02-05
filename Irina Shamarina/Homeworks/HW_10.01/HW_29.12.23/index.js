// Задание 1 
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
        region: ['Iowa', 'Texas', 'California']
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

/*С помощью деструктуризации запишите в отдельны переменные: 
1.1 Название города в котором находится авто 
1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
1.3 Поле high, объекта price 
1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 } */

// 1.1
const { adress: { country: { city: { name: Boston } } } } = car;
// 1.2
const { adress: { region: [, , , regionName = 'Arizona'] } } = car;
// 1.3
const { specs: { price: { high: highPrice } } } = car;
// 1.4
const { specs: { fuelConsumption = { city: 12, mix: 10, country: 8 } } } = car;

/* Задание 2
2. Даны 2 массива:
let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

2.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
2.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
2.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
2.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.*/

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 2.1
let userName = prompt('Введите имя: ');
if (people1.includes(userName)) {
    people2.push(userName);
}
console.log(people2);


// 2.2
let userName1 = prompt('Введите имя: ');
let index = people2.indexOf(userName1);
if (index !== -1) {
    people2.splice(index, 1);
}
console.log(people2);

// 2.3
let newArrName = [];
for (let i = 0; i < people1.length; i++) {
    if (people2.includes(people1[i])) {
        newArrName.push(people1[i]);
    }
}
console.log(newArrName);

// 2.4
let combined = people1.concat(people2);
let uniqueNames = [];


for (let i = 0; i < combined.length; i++) {
    if (uniqueNames.indexOf(combined[i]) === -1) {
        uniqueNames.push(combined[i]);
    }
}
console.log(uniqueNames);

/* Задание3
Напишите функцию hyphenDestroyer(), которая преобразует
строки вида «my-short-string» в «my short string».
То есть, дефисы удаляются и вместо них появляются пробелы.
Например:
hyphenDestroyer ("background-color") === 'background сolor';
hyphenDestroyer ("list-style-image") === 'list style image';
hyphenDestroyer ("-webkit-transition") === 'webkit transition'; */

function hyphenDestroyer(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            newStr += ' ';
        } else {
            newStr += str[i];
        }
    }
    return newStr;

}
console.log(hyphenDestroyer('background-color'));
console.log(hyphenDestroyer('list-style-image'));
console.log(hyphenDestroyer('-webkit-transition'));


/*Задание 4
4. Дан массив сonst arr = [2,5,7,12,62,23,88,153];
выведите в консоль наибольшее ЧЕТНОЕ число из этого массива*/

const arr = [2, 5, 7, 12, 62, 23, 88, 153];
let maxEvenNumber;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && (maxEvenNumber === undefined || arr[i] > maxEvenNumber)) {
        maxEvenNumber = arr[i];
    }
}
if (maxEvenNumber === undefined) {
    console.log('В массиве нет четных чисел');
} else {
    console.log(maxEvenNumber);
}

//Задание 5
/*Валерчик и Олежик очень любят поиграть в контр страйк,
Даны два объекта, в которых записано сколько раз побеждал каждый из них*/
const valerchik = {
    wins: 213,
    loses: 123
};

const olejik = {
    wins: 51,
    loses: 64
};

/*cоздать функцию getPercentage() которая принимает любой объект из выше перечисленных и возвращает строку с процентом побед и поражений в  виде 
'процент побед 45%, процент поражений 55%'*/

function getPercentage(gamer) {
    let totalGames = gamer.wins + gamer.loses;
    let winPercentage = (gamer.wins / totalGames) * 100;
    let losePercentage = (gamer.loses / totalGames) * 100;

    return ' Процент побед: ' + Math.round(winPercentage) + '%, процент поражений: ' + Math.round(losePercentage) + '%';

}
console.log(getPercentage(valerchik));
console.log(getPercentage(olejik));

//Задание 6
//Написать функцию которая возвращает годовую оценку по любому предмету (функция должна принимать 4 числа)

function calculateAnnualGrade(grade1, grade2, grade3, grade4) {
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)) {
        console.log('Один или несколько параметров не являются числом');
        return;
    }
    return (grade1 + grade2 + grade3 + grade4) / 4;
}

let annualGrade = calculateAnnualGrade(2, 4, 3, 4);
if (!isNaN(annualGrade)) {
    console.log('Годовая оценка: ' + Math.round(annualGrade));
}

/*Задание 7
Написать функцию, которая принимает случайный
двумерный массив (разной длины). Функция
возвращает тот массив сумма элементов которого
наибольшая.*/



function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function maxArraySum(arr) {
    if (arr.length === 0) {
        console.log('Входной массив пустой');
        return;

    }
    let maxSum = sumArray(arr[0]);
    let maxArr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currSum = sumArray(arr[i]);
        if (currSum > maxSum) {
            maxSum = currSum;
            maxArr = arr[i];
        }

    }
    return maxArr;

}
let arrays = [[1, 2], [3, 4, 5], [7, 8, 9, 10]];
console.log(maxArraySum(arrays));