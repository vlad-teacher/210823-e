// Каждому объекту из этого массива необходимо добавить метод .sayHello()
// который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта

const persons = [
  {
    name: "One",
    age: 1,
  },
  {
    name: "Two",
    age: 2,
  },
  {
    name: "Three",
    age: 3,
  },
  {
    name: "Four",
    age: 4,
  },
];

function sayHello() {
  return `Hello! My name is ${this.name}`;
}

let copiedPersons = persons.map((item) => {
  return { ...item, sayHello };
});

console.log(copiedPersons);

// 2 используя setTimeout и .forEach(), вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду

copiedPersons.forEach((obj, index) => {
  setTimeout(() => {
    console.log(obj.sayHello());
  }, (index + 1) * 1000);
});

// 3 заставьте creature воспользоваться методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature
const creature = { name: "Ctulhu", eyes: 8 };

let creatureSayHello = copiedPersons[0].sayHello.bind(creature);

console.log(creatureSayHello());

// 4 напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива)
// эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
// после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива) пример:

//  function presentation(cb){
//     return `Ladies and Gentlemen, here is our person: ${cb()}`
//  }

//  console.log(presentation(sayHello.bind(copiedPersons[0])))

function presentation(cb) {
  return `Ladies and Gentlemen, here is our person: ${cb()}`;
}

console.log(presentation(sayHello.bind(copiedPersons[0])));
