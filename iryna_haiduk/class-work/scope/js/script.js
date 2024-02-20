
const person = {
    name: 'John',
    age: 23
};


//scope

function counterBody() {
    let count = 0;


    function counter() {
        count++
        return count;
    }

    return counter;
};

const counter = counterBody();
const counter2 = counterBody();

console.log(counter());//1
console.log(counter());//2
console.log(counter());//3

//it's new function with new values
console.log(counter2());//1
console.log(counter2());//2

//curry, partially, applied function

function foo(a, b, c) {
    return a + b + c;
};

console.log(foo(1, 2, 3)); //6

//second example

function foo1(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
};
console.log(foo1(1)(2)(3)); //6

function foo2(a, b) {
    const arr = [];
    for (let i = 0; i < (a * b) ** 2; i++) {
        arr.push(new Array(100).fill(1).map(() => a * i));
    }

    return function (c) {
        arr[0] = arr[0] + c;

        return arr;
    }

};

foo2(1, 2)(10);

//devide tasks
const tempRes = foo2(1, 2);
tempRes(10);

//pure function makes only one task and return the same results with same values

function notPureFunc(a, b) {
    console.log(a + b);//side effect - console.log, function not pure
    return a + b;
}

const person1 = {
    name: 'John',
    age: 20
};

function notPureFunc(a, b) {
    const result = a + b + person1.age;
    return result;
}

function pureFunc(a, b) {
    const result = a + b;
    return result;
}

function pureFunc1(a, b) {
    const result = a + b + 3;
    return result;
}

function pureFunc2(obj, a, b) {
    const result = a + b + obj.age;
    return result;
}

notPureFunc(2, 5);//7
notPureFunc(2, 5);//7
notPureFunc(2, 5);//7

const obj = { a: { b: 3 } };

const obj2 = structuredClone(obj);

console.log(obj2, obj2 === obj); //false

//recursion

function recurseFunk() {
    if (true) {
        ecurseFunk()
    } else {
        return 2;
    }
}

const person4 = {
    name: "Alex",
    size: {
        height: 23,
        width: 51
    }
};


const person4Copy = { ...person4 }; //not deep coping
const person4Copy1 = { ...person4, size: { ...person.size } }; //deep coping

function deepClone(obj) {
    const objCopy = {};
    for (let key in obj) {

        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            objCopy[key] = deepClone(obj[key]);
        } if (Array.isArray(obj[key])) {
            objCopy[key] = obj[key].map(obj => deepClone(obj));
        } else {
            objCopy[key] = obj[key];
        }

    }

    return objCopy;

};


function newCounter(a) {
    console.log(a);

    if (a !== 1) {
        newCounter(a - 1);
    }

}

newCounter(5);




