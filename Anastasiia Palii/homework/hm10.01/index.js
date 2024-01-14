//1. Дан массив:
//const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
//пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет

//2. Дан массив: [32, -41, 0, 12, 67, 12, -34]
//На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку

1. 
const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];

const userInput = prompt('Введите имя:');
const occurrences = arr.filter(name => name === userInput).length;

if (occurrences > 0) {
  console.log(`Имя "${userInput}" встречается в массиве ${occurrences} раз(а).`);
} else {
  console.log(`Имя "${userInput}" не найдено в массиве.`);
}

2.
const originalArray = [32, -41, 0, 12, 67, 12, -34];
const invertedArray = originalArray.map(number => -number);

console.log(invertedArray);