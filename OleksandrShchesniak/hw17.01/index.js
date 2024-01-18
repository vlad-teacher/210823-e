
const arr = ['Valerchik','Olezhik','Katya','Phill','Vladosik', 'Metrofan']

const arr2 = [
    {
        name: 'Olezha',
        age: 23
    },
    {
        name: 'Phill',
        age: 19
    },
    {
        name: 'Vlados',
        age: 25
    },
    {
        name: 'Valera',
        age: 17
    }
]

// 1. проверить есть ли в массиве объект у которого имя митрофан (some, find)

const res = arr.some((item) => {
    return item === 'Metrofan'
});
console.log(res)

const res2 = arr.find((item) => {
    return item === 'Metrofan'
});
console.log(res2)

// 2. проверить всем ли есть 18 лет

const res3 = arr2.filter(({age}) => age > 18);
console.log(res3)

// 3. с помощью метода filter оставить в массиве только те объекты у которых длина имени больше 6

const res4 = arr.filter((item) => {
    return item.length > 6;
});
console.log(res4)

// 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'

const res5 = (sum, current, index) => {
    const text = index === 0 ? 'Hello ' : ' and ';
    return sum + text + current;
};
const finalStr = arr.reduce(res5, '');
console.log(finalStr)