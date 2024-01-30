const arr = ["Valerchik", "Olejik", "John", "Mitrofan"];

const numbers = [4,6,1,2,7,9];

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


// 1. проверить есть ли в массиве объект у которого имя митрофан (some, find)
// 2. проверить всем ли есть 18 лет
// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6
// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'


// 3: 
const filteredArr2 = arr2.filter(obj => obj.name.length > 6);

// 4:
const reducedString = arr.reduce((acc, name, index) => {
  if (index === arr.length - 1) {
    return acc + `and ${name}`;
  } else {
    return acc + `${index === 0 ? 'Hello ' : ''}${name}, `;
  }
}, '');

console.log(filteredArr2);
console.log(reducedString);