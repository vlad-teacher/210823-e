/* 1. Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.

1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.*/

function processName(names, cb1, cb2) {


    let namesWithSurname = names.map(name => `${name} Smith`);

    let namesWithMr = cb1(namesWithSurname);

    cb2(namesWithMr);

}

function addMr(names) {
    return names.map(name => ` Mr. ${name}`);

}
function showAlert(names) {
    names.forEach(name => alert(name));
}

let newNames = ['Valery', 'John', 'Dylan', 'Oliver'];
processName(newNames, addMr, showAlert);


/* 2. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]*/


function myFuncName(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]]++

        } else {
            counts[arr[i]] = 1;
        }
    }

    let result = [];

    for (let num in counts) {
        if (counts[num] > 1) {
            result.push(parseInt(num));
        }
    }

    return result;
}

console.log(myFuncName([1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3]));





/* 3. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая. */


let arr = Array.from({ length: 8 }, () => Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => Math.floor(Math.random() * 100)));

console.log('Исходный массив: ', arr);

let maxSumArray = arr.reduce((maxArr, currArr) => {
    let currSum = currArr.reduce((a, b) => a + b, 0);
    let maxSum = maxArr.reduce((a, b) => a + b, 0);
    return currSum > maxSum ? currArr : maxArr;
}, []);
console.log('Массив с наибольшей суммой элементов: ', maxSumArray);

/* 3. Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.*/

let arr1 = [36, 47, 101, 25, 18, 6, 8, 254, 56, 87, 90];

let filteredArray = arr1.filter(num => num >= 10 && num < 100 && num % 2 === 0);

console.log(filteredArray);

// 4. Дан массив объектов:

const fbTeam = [
    {
        playerName: "Messi",
        team: "Barcelona"
    },
    {
        playerName: "Suarez",
        team: "Barcelona"
    },
    {
        playerName: "Ronaldo",
        team: "Juventus"
    },
    {
        playerName: "Buffon",
        team: "Juventus"
    },
    {
        playerName: 'Valerchik',
        team: 'Vedrich97'
    },
    {
        playerName: "Gonsalo",
        team: "Juventus"
    },
    {
        playerName: "Pedro",
        team: "Chelsea"
    },
    {
        playerName: "Zuma",
        team: "Chelsea"
    },
    {
        playerName: "PSG",
        team: "Rico"
    }
];
// С помощью метода reduce() преобразуйте его в объект вида:

const fbPlayersByTeams = fbTeam.reduce((acc, player) => {
    if (!acc[player.team]) {
        acc[player.team] = [];
    }
    acc[player.team].push(player);
    return acc;
}, {});

console.log(fbPlayersByTeams);

// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
// Игроки должны быть сгруппированы по командам в соответствующие поля объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)*/


