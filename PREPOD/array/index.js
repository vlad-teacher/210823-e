// new Array()
// spread
// .reverse()
// .concat()
// .indexOf()
// .includes()
// .join()

// .split() ЭТО НЕ МЕТОД МАССИВА!!!!

// 1. что делает
// 2. что возращает
// 3. мутация

// const arr = [54, 63, 76, 34, 21, 57];
// const arr2 = [1,2,3,4,5];
// const arr3 = ['a', 'b', 'c'];
// const arr3 = [false, true];

// const result = arr2.concat( arr ).concat(arr3);

// const result = arr3.includes('a');

// const result = arr2.join('.');

// const str = 'hello world one two';
// const result = str.split(' ');

// console.log(str);

// Дана строка 
// const str = 'мама мыла раму';
// пользователь вводит слово
// вывести в консоль
// новую строку (на основе str)
// где будет написано 
// 'мама мыла' + ответ пользователя

// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const result = arr.splice(2,3);
// console.log(result);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arrPartial = arr.splice(arr.length - 2, 2);
// const result = arrPartial.concat(arr);

// const franz = arr.pop();
// const janett = arr.pop();
// arr.unshift(janett, franz);

// console.log(arr);

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// arr.splice(arr.indexOf('Eddie'), 2, 'Oleg', 'Valerchik');

// console.log(arr);


// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

// const str = 'мама мыла раму';
// const userWord = prompt('что помыть?');

// console.log(str.split(' ').slice(0,2).concat(userWord).join(' '));

// const strArr = str.split(' ');


// strArr.splice(2,1, userWord);


// strArr[strArr.length - 1] = userWord;
// const resultSentence = strArr.join(' ');

// console.log(resultSentence);


// new Array()
// spread
// destructuring

// const arr = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c'];

// const a = arr2[0];
// const b = arr2[1];

// const [word1, word2] = arr2;

// let [a,b] = arr2;


// console.log(l1);

// console.log( Math.max( ...arr ) );

// const arrCopy = [...arr, 'new value', ...arr2, 'another new value'];
// .slice()

// console.log( arrCopy );



