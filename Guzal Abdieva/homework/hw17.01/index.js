// 1. проверить есть ли в массиве объект у которого имя митрофан (some, find)

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

// const result = arr2.find(({ name }) => {
//   return name === "Mitrofan";
// });
// console.log(result);

// 2. проверить всем ли есть 18 лет
// const arr3 = arr2.filter(({ age }) => age <= 18);
// const isOver18 = arr3.every(({age}) => age >18)
// console.log(arr3);

// 3. с помощью метода filter оставить в массиве только те объекты у
//которых длина имени больше 6

// const arr3 = arr2.filter(({ name }) => name.length > 6);

// console.log(arr3);

// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'
const result = arr2.reduce((acc, { name }, index, arr) => {
  return {
    [name]: "Hello Valerchik and Olejik .",
  };
});

console.log(result);
