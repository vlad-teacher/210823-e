function getArrSum (arr) {
    return arr.reduce((acc, num) => acc + num,0);
}

const sumOfArrays = arrays.reduce(function(previousValue, currentArr){
    const sum = getArrSum(currentArr);

    return [...previousValue, sum];
}, []);

const maxNum = Math.max(...sumOfArrays);

const maxNumIndex = sumOfArrays.indexOf(maxNum);

console.log(`max arr nums is `, arrays[maxNumIndex]);


const arr = [1, 1, 2, 2, 4, 5, 6, 7, 7];

function getUniqueDoubleNum(arr) {
  return arr.reduce((resultArr, num) => {
    const doesNumRepeats = arr.indexOf(num) !== arr.lastIndexOf(num);
    const isNumAlreadyFound = resultArr.includes(num);

    if (doesNumRepeats && !isNumAlreadyFound) {
      resultArr.push(num);
    }

    return resultArr;
  }, []);
}
console.log(getUniqueDoubleNum(arr));

// 3.
// Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)