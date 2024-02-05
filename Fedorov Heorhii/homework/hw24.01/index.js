const arrays = [
    [1,4,5],
    [3,5,7,3,5],
    [3,5,2,6],
    [4,64,3]
]

function getArrSum (arr){
    return arr.reduce((acc, num) => acc + num,0);
}

const sumOfArrays = arrays.reduce(function(previosValue, currentArr){
    const sum = getArrSum(currentArr);
    return [...previosValue, sum];
}, []);

const maxNum = Math.max(...sumOfArrays);
const maxNumIndex = sumOfArrays.indexOf(maxNum);
    console.log('max arr num is ', arrays[maxNumIndex]);

