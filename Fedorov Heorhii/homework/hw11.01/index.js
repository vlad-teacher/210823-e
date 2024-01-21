/*1. Дан массив: 
const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik']; 
пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет*/
const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
const userName = prompt('Введите имя: ');
let count = 0;

for( let i = 0; i<arr.length; i++){
    if(userName === arr[i]){
        count++;
    }
}
if(count>0){
    console.log(`Yor name appeares ${count} times`);
}else{
    console.log(`The name ${userName} is not in the array`);
}

/*2. Дан массив: [32, -41, 0, 12, 67, 12, -34] 
На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку*/
const arr2 = [32, -41, 0, 12, 67, 12, -34];
const arr3 = arr2.map(function(number){
    if(number !== 0){
        return -number;
    } else{
        return 0;
    }
});
console.log(arr3);
