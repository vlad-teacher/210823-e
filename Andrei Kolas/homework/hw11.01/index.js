// 1. Дан массив:
// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
// пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет

// 2. Дан массив: [32, -41, 0, 12, 67, 12, -34]
// На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку


// 1

// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
// let counterHowManyTimes = 0;
// const userInput = prompt('Введите имя')

// for (let i = 0; i < arr.length; i++) {
//    if (userInput === arr[i]) {
//       counterHowManyTimes++;
//    }
// }

// if (counterHowManyTimes > 0) {
//    console.log(`Имя ${userInput} встречается ${counterHowManyTimes} раз/раза`);
// } else {
//    console.log('Такого имени нет, анлаки');
// }

// 2

// const arr1 = [32, -41, 0, 12, 67, 12, -34];
// const arr2 = arr1.slice();

// for (let i = 0; i < arr2.length; i++) {
//    if (arr2[i] > 0) {
//       arr2[i] *= -1;
//    } else {
//       arr2[i] *= -1;
//    }
// }

// console.log(arr1);
// console.log(arr2); 