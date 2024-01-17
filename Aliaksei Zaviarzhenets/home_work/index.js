// 1. Дан объект

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

// С помощью деструктуризации запишите в отдельны переменные: 
// 1.1 Название города в котором находится авто 
// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
// 1.3 Поле high, объекта price 
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }



1.1

const { adress: { country: { city: { name: cityName }}}} = car;
console.log(`1.1   Название города: ${cityName}`); 

1.2


// const {address: { region = 'Arizona' } } = car;

// console.log(`Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') ${region} `)

1.3


const { specs: { price: { high }}} = car;
console.log(`1.3   поле hight объекта price: ${ high }}`);

1.4

const { specs: {fuelConsumption = { city: 12, mix: 10, country: 8 }}} = car;
console.log(`1.4   объект car после добавления поле fuelConsumption ${car}`);










// 2. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 2.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

const printName = prompt("введите имя");

if(people1.includes(printName)){
    people2.push(printName);
    console.log(`2.1  введеное вами имя ${printName} добавлено в массив people 2`);
} else {   console.log( `2.1   введеного имени ${printName} нет в масиве people1 `)}

// 2.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

const names = prompt("print name");
const index = people2.indexOf(names);

if (index !== -1){
    people2.splice(index, 1);
    console.log(`2.2   имя ${names} удалено из массива people2`) 
} else {
    console.log (`2.2   имя ${names} отсутствует в массиве`)
}

// 2.3 

let doubleName = [];

for (let i = 0; i < people1.length; i++){
    if(people2.includes(people1[i])){
        doubleName.push(people1[i])
    }
}

console.log(`2.3   создали новый масив и поместили в него имена которые совпадают в people1 и people2 ${doubleName}`);


// 2.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
let combinedName = people1.concat(people2);
let notDobleName = [];

for (let i = 0; i < combinedName.length; i++){
    if(!notDobleName.includes(combinedName[i])){
        notDobleName.push(combinedName[i]);
    }
}

console.log(`2.4  Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен. ${notDobleName} `)

// 3.
// Напишите функцию hyphenDestroyer(), которая преобразует
// строки вида «my-short-string» в «my short string».
// То есть, дефисы удаляются и вместо них появляются пробелы.
// Например:
// hyphenDestroyer ("background-color") === 'background сolor';
// hyphenDestroyer ("list-style-image") === 'list style image';
// hyphenDestroyer ("-webkit-transition") === 'webkit transition';


function hyphenDestroyer(str){
    return str.replace(/-/g, ' ');
}

const string = 'My-short-string'
const result = hyphenDestroyer(string);
console.log(`3   функция которая принимает строки с дефисом и заменяет их пробелом: ${result}`);

// 4. Дан массив сonst arr = [2,5,7,12,62,23,88,153];
// выведите в консоль наибольшее ЧЕТНОЕ число из этого массива

const arr = [2,5,7,12,62,23,88,153];

function maxNamArray(array){
return Math.max(...array.filter(num => num % 2 === 0));
}

const maxNum = maxNamArray(arr);
console.log(`4   самое большое четное число массива: ${maxNum}`);


// 5. Валерчик и Олежик очень любят поиграть в контр страйк,
// Даны два объекта, в которых записано сколько раз побеждал каждый из них
// const valerchik = {
//     wins: 213,
//     loses: 123
// };

// const olejik = {
//     wins: 51,
//     loses: 64
// };

// cоздать функцию getPercentage() которая принимает любой объект из выше перечисленных и возвращает строку с процентом побед и поражений в  виде 
// 'процент побед 45%, процент поражений 55%'



// 6. Написать функцию которая возвращает годовую оценку по любому предмету (функция должна принимать 4 числа)

const middleRating = (num1, num2, num3, num4) =>
   (num1 + num2 + num3 + num4) / 4;
  


let physics =  middleRating (7, 6, 8, 10);
console.log(`6   средняя годовая оценка по предмету (физика) ${physics}`);

// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины). Функция
// возвращает тот массив сумма элементов которого
// наибольшая.

// --------------------------------------------------------------------------------------------------------------------------------------


