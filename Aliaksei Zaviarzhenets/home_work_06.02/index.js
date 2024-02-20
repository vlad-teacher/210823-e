// 1. Дан массив объектов:
// ```js
// const persons = [
//     {
//         name: 'One',
//         age: 1,
//     },
//     {
//         name: 'Two',
//         age: 2
//     },
//     {
//         name: 'Three',
//         age: 3
//     },
//     {
//         name: 'Four',
//         age: 4
//     }
// ];
// ```

// Каждому объекту из этого массива необходимо добавить метод `.sayHello()`
// который выводит сообщение вида `"Hello! My name is {NAME}"`, где `NAME` - это поле `name` каждого 
// объекта

const persons = [
    {
        name: 'One',
        age: 1,
    },
    {
        name: 'Two',
        age: 2
    },
    {
        name: 'Three',
        age: 3
    },
    {
        name: 'Four',
        age: 4
    }
];


// 2. используя `setTimeout` и `.forEach()`, вызовите метод `.sayHello()` у каждого объекта с задержкой в 1 
// секунду 

persons.forEach((person, index) => {
    setTimeout(() => {
    person.sayHello()
}, (index + 1) *1000);})


persons.forEach(obj => obj.sayHello = function(){
console.log(`Hello! My name is ${this.name}`)
}) ;   


// 3. используя объект 
// ```js
// const creature = { name: 'Ctulhu', eyes: 8 };
// ```
// заставьте `creature` воспользоваться
// методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в `creature`

const creature = { name: 'Ctulhu', eyes: 8 };
console.log(persons[0].sayHello.apply(creature));



