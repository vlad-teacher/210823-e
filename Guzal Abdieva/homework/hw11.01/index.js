// 1. Дан массив:
// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik',
//'Evlampij', 'Olegik', 'Valerchik'];
// пользователь вводит имя (чз prompt),
//проверить сколько раз встречается это имя в массиве,
//либо вывести сообщение что такого имени нет

// const arr = [
//   "Valerchik",
//   "Olegik",
//   "Mitrofan",
//   "Valerchik",
//   "Evlampij",
//   "Olegik",
//   "Valerchik",
// ];
// let quantityName = 0;

// let userInput = prompt("введите имя");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === userInput) {
//     quantityName++;
//   }
// }
// if (quantityName > 0) {
//   console.log("количество совпадений: " + quantityName);
// } else {
//   console.log("такого имени нет");
// }

// 2. Дан массив: [32, -41, 0, 12, 67, 12, -34]
// На основе этого массива, сформировать новый массив в котором все числа
// будут противоположны по знаку

const originalArr = [32, -41, 0, 12, 67, 12, -34];
const newArr = originalArr.map(function (number) {
  if (number !== 0) {
    return -number;
  } else {
    return 0;
  }
});
console.log(newArr);
