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

const mitrofan = arr2.find(({ name }) => name === 'Mitrofan'

)
console.log(mitrofan)

// 2. проверить всем ли есть 18 лет

const isOver18 = arr2.every(({ age }) => {
    return age > 18;
});

if (isOver18 > 18) {
    console.log('всем больше 18')
} else {
    console.log('меньше')
}

// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6

 const lengthSex = arr2.filter((word) => {
    return  word.length > 6;
 });

 console.log(lengthSex);

// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'

const rString = arr2.reduce((accumulator, currentObject, index, array) => {
   if(index < 2){
    const separator = index === 0? '' : 'and';
        return `${accumulator} ${separator} ${currentObject.name}`;
   } else { return `${accumulator} ` };
}, 'hello');

console.log(rString);




