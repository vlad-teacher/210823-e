//1. Дан массив объектов:
// 1.  Каждому объекту из этого массива необходимо добавить метод .sayHello()
// который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого 
// объекта

function sayHello (){
    console.log(`Hello! My name is ${this.name}`);
}

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
const helloPerson = persons.map((item) => ({
    ...item,
    sayHello
}));

helloPerson[0]['sayHello']();
console.log(helloPerson);


// 2. используя setTimeout и .forEach(), вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду 

 let delay = 0;

helloPerson.forEach((person) => {
    setTimeout(() => { 
        person.sayHello();
    }, delay);

    delay += 1000;
});


// 3. используя объект заставьте creature воспользоваться
// методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

const creature = {
     name: 'Ctulhu',
     eyes: 8,
     useSayHello: function(person){
        sayHello.call(person);
     }
     };

     creature.useSayHello(persons[0]);



// 4. напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива)

function sayHello (){
    console.log(`Hello! My name is ${this.name}`);
}

const persons1 = [
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
const helloPerson1 = persons1.map((item) => ({
    ...item,
    sayHello
}));

helloPerson1[0]['sayHello']();
console.log(helloPerson1);

function executeSayHello (cb, array){
   array.forEach(item => {
    cb.call(item);
   });
}

executeSayHello(helloPerson1[0]['sayHello'], helloPerson1);

// эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
// после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива)
// пример:


// presentation(persons[0].sayHello) // возможно тут при передаче коллбэка что-то надо поменять
// // =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is One" // это результат запуска коллбэка persons[0].sayHello

// presentation(persons[1].sayHello) // возможно тут при передаче коллбэка что-то надо поменять
// // =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is Two" // это результат запуска коллбэка persons[1].sayHello 

function presentation(cb){
    console.log("Ladies and Gentlemen, here is our person: ");
    cb.call(this);
}
 presentation.call(helloPerson[0], helloPerson[0].sayHello);
 presentation.call(helloPerson[1], helloPerson[1].sayHello);
 presentation.call(helloPerson[2], helloPerson[2].sayHello);
 presentation.call(helloPerson[3], helloPerson[3].sayHello);
 
