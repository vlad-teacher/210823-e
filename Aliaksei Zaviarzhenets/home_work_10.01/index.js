// 1. Дан массив:
// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
// пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет




//               0            1         2           3             4          5          6
const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];

let quantityName  = 0;


   let userInput = prompt('введите имя');

for (let i = 0; i < arr.length; i++){
 
     if(arr[i] === userInput ){
 quantityName ++;
}}
     if(quantityName > 0){
 console.log(` количество совпадений:  ${quantityName}`);}
     else {
 console.log('такого имени нет');
   }



//  2. Дан массив: [32, -41, 0, 12, 67, 12, -34]
// На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку

const arr1 = [32, -41, 0, 12, 67, 12, -34];
const arr2 = [];

 
 for (let i = 0; i < arr1.length; i++) 
 if (arr[i] === 0){
    continue
 }else
 {    
arr2.push(-arr1[i])
 }  
console.log(arr2);





