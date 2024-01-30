
const arrays = [
    [1, 4, 5],
    [3, 5, 7, 3, 5],
    [3, 5, 2, 6],
    [4, 64, 3]
];
function getArrSum(arr) {
    return arr.reduce(function (acc, num) {
        return acc + num;
    }, 0)
};

const sumOfArrays = arrays.reduce(function (previousValue, currentArr) {
    const sum = getArrSum(currentArr);

    return [...previousValue, sum];
}, []);

console.log(sumOfArrays);

const maxNum = Math.max(...sumOfArrays);

const maxNumIndex = sumOfArrays.indexOf(maxNum);
console.log(arrays[maxNumIndex]);

//task2

const arr = [1, 2, 3, 4, 5, 6, 7, 7];
// 1 берем любой элемент
// 2 проверяем на совпадение
// 3 если совпадение есть и этого элемента еще нет в результирующем массиве
// то добавляем в результирующий массив если нет пропускаем элемент 

function getUniqueDoubleNum(arr) {

    return arr.reduce((resultArr, num, index, arr) => {

        const doesNumRepeat = arr.indexOf(num) !== arr.lastIndexOf(num);
        const isNumAlreadyFound = resultArr.includes(num);

        if (doesNumRepeat && !isNumAlreadyFound) {
            resultArr.push(num);
        }

        return resultArr;
    }, []);


}
console.log(getUniqueDoubleNum(arr));

function makeCounterFunc() {
    let count = 0;
    function nextNum(num) {
        if (num !== undefined) {
            count = num;
        }
        count++;
        return count;
    }
    return nextNum;
}

let counter = makeCounterFunc();
console.log(counter());//1
console.log(counter());//2
console.log(counter(7));//8
console.log(counter());//9
console.log(counter());//10

// 3.
// Создать функцию classNameEditor(), задача которой "управлять" css-классами. 
//Функция должна принимать строку с названием css-класса и булево значние.
// Если булево значение true, то функция должна добавлять переданный css-класс, если false, 
//то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз 
//(не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз
// (это невозможно тк класс уже удален)

function classNameEditor() {
    let classes = [];

    return function (className, bool) {

        if (!classes.includes(className) && bool) {
            classes.push(className);
        } else if (classes.includes(className) && !bool) {
            classes.splice(classes.indexOf(className), 1);
        }

        return classes.join(" ");
    }
}

const classNameEditorFunc = classNameEditor();

console.log(classNameEditorFunc()); // '' - вернется пустая строка
console.log(classNameEditorFunc('test', true)); // 'test' - добавили класс 'test'
console.log(classNameEditorFunc('test', true)); // 'test' - попытались добавить класс 'test' еще раз 
//(не должно быть дублирующих классов)
console.log(classNameEditorFunc('smth', true)); // 'test smth' - добавили класс 'smth'
console.log(classNameEditorFunc('test', false)); // 'smth' - удалили класс 'test'
console.log(classNameEditorFunc('test', false)); // 'smth' - удалили класс 'test' еще раз
// (это невозможно тк класс уже удален)
