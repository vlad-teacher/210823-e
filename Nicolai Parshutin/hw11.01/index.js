// 1. Дан массив:
// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
// пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет

// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
// const userName = prompt('Enter your name please');
// let count = 0;
// for( let i = 0; i<arr.length; i++){
//     if(userName === arr[i]){
//         count++;
//     }
// }
// if(count>0){
//     console.log(`Yor name appeares ${count} times`);
// }else{
//     console.log(`The name ${userName} is not in the array`);
// }

// 2. Дан массив: [32, -41, 0, 12, 67, 12, -34] 
// На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку

const arr = [32, -41, 0, 12, 67, 12, -34];
const arr2 = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i]>0){
        arr2.push(arr[i]*(-1));
    }else{
        arr2.push(Math.abs(arr[i]));
    }
}
console.log(arr2);