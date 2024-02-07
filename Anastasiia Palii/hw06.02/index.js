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

//1
persons.forEach(person => {
    person.sayHello = function() {
        console.log(`Hello! My name is ${this.name}`);
    };
});

//2
persons.forEach(person => {
    setTimeout(() => {
        person.sayHello();
    }, 1000);
});

//3
setTimeout(() => {
    const randomPerson = persons[Math.floor(Math.random() * persons.length)];
    creature.sayHello = randomPerson.sayHello;
    creature.sayHello();
}, 1000);

//4
function presentation(callback) {
    console.log("Ladies and Gentlemen, here is our person: ");
    callback.call(persons[0]); 
}


presentation(persons[0].sayHello);
