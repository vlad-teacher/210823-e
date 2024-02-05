
const arr = ['JKLL', 'm mm', 'mkmkmk', 'm,m,m', 'Jack'];

const result = arr.some((item, index, arr) => {
    return item.length === 4; //true -  one from all items has length 4
});

console.log(result);

const result2 = arr.every((item, index, arr) => {
    return item.length === 4; //false - all from all items has length 4
});

console.log(result2);

const result3 = arr.find((item) => {
    return item === 'Jack';
});

console.log(result3);

const result4 = arr.map((item) => item.length);

console.log(result4);

const result5 = arr.filter((item) => item.length >= 5);

console.log(result5);

const numbers = [7, 8, 90, 45, 67, 78, 3, 6]

const result6 = numbers.sort((num1, num2) => num1 - num2);

console.log(result6);
const arr2 = [
    {
        name: "Valerchik",
        age: 23,
    },
    {
        name: "Olejik",
        age: 90,
    },
    {
        name: "John",
        age: 12,
    },
    {
        name: "Mitrofan",
        age: 35,
    },
];
//const result8 = arr2.reduce((acc, { name, age }, index, arr) => ({ ...acc, [name]: age }), {}); //{ Valerchik: 23, Olejik: 90, John: 12, Mitrofan: 35 }

 const result12 = arr2.reduce((acc, { name }, index, arr) => {
    if (index === arr.length - 1) {
       return (`${acc} ${name} `)
    } else {
      return  (`${acc} ${name} and `)
    }
   
}, 'Hello');

// return fibArr.reduce((acc, curr) => {
//     if (curr % 2 != 0) acc += curr;
//     return acc;
//   }, 0);

console.log(result12);

const result11 = arr2.filter((item) => {
    return item.name.length > 6;
});

console.log(result11);

const result10 = arr2.every((item) => {
    return item.age >= 18;
});

console.log(result10);

const result9 = arr2.some((item) => {
    return item.name === 'Mitrofan';
});

console.log(result9);



//объект у которого имя митрофан (some, find)
// 2. проверить всем ли есть 18 лет
// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6
// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'

const result7 = arr2.reduce((acc, { age }, index, arr) => acc + age, 0);

console.log(result7);

const result8 = arr2.reduce((acc, { name, age }, index, arr) => ({ ...acc, [name]: age }), {}); //{ Valerchik: 23, Olejik: 90, John: 12, Mitrofan: 35 }
console.log(result8);