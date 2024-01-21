//1.Дан массив:
const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
//пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет

let userName = prompt(`Enter name`);
let sum = 0;

for(let key in arr){
    if(arr[key] == userName){
        sum++;
    }
}
sum > 0 ? console.log(`userName was there ${sum} time/s`) : console.log(`there is no userName`);

//2. Дан массив:
const arr2  = [32, -41, 0, 12, 67, 12, -34];
//На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку

for(let key in arr2){
    if(arr2[key] > 0){
        arr2[key] -= arr2[key] * 2
    }else{
        arr2[key] = (arr2[key])-(arr2[key])-(arr2[key]);
    }
}
console.log(arr2);