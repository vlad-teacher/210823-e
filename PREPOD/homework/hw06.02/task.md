# This

1. Дан массив объектов:
```js
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
```

Каждому объекту из этого массива необходимо добавить метод `.sayHello()`
который выводит сообщение вида `"Hello! My name is {NAME}"`, где `NAME` - это поле `name` каждого 
объекта

2. используя `setTimeout` и `.forEach()`, вызовите метод `.sayHello()` у каждого объекта с задержкой в 1 секунду 

3. используя объект 
```js
const creature = { name: 'Ctulhu', eyes: 8 };
```
заставьте `creature` воспользоваться
методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в `creature`

4. напишите функцию которая принимает коллбэк (метод `.sayHello()` любого объекта из массива)
эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
после чего должна запускать коллбэк (метод `.sayHello()` любого объекта из массива)
пример:

```js
presentation(persons[0].sayHello) // возможно тут при передаче коллбэка что-то надо поменять
// =====>>>>>
"Ladies and Gentlemen, here is our person: "
"Hello! My name is One" // это результат запуска коллбэка persons[0].sayHello

presentation(persons[1].sayHello) // возможно тут при передаче коллбэка что-то надо поменять
// =====>>>>>
"Ladies and Gentlemen, here is our person: "
"Hello! My name is Two" // это результат запуска коллбэка persons[1].sayHello
```