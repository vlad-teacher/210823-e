const arr1 = [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4];


function getUnicElements(arr) { // [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4]
    const unicElem = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
            unicElem.push(arr[i]);
        }
    }

    return unicElem;
}

function getDublicateElements(arr) {
    const dublicateElem = [2];

    for (let i = 0; i < arr.length; i++) {
        if (
            arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i]) && // [2, 4, 2, 2, 5, 6, 1, 2, 7, 3, 4]
            !dublicateElem.includes(arr[i])
        ) {
            dublicateElem.push(arr[i]);
        }
    }

    return dublicateElem;
}

const result = getUnicElements(arr1);
const result2 = getUnicElements([2,4,1,4,523,543,5,45,352,342,4,4]);