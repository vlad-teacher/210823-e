//17.01
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
const mitrofan = arr2.some(({ name }) => {
    return name === 'Mitrofan';
})
console.log(mitrofan);

// 2. проверить всем ли есть 18 лет
const isOver18 = arr2.every(({ age }) => age > 18);


if (isOver18) {
    console.log('Всем больше 18');
} else {
    console.log('Кому то меньше 18');
}

// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6
const nameLenght = arr2.filter(({name}) => {
    return name.length > 6;
} );

console.log(nameLenght);

// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'
const rez = (sum,{name},index) => { 
    const hello = index === 0 ? 'Hello' : 'and';
    return sum + hello + name;
}
const text = arr2.reduce(rez, '');
console.log(text);
