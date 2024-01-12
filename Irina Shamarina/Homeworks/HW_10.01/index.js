// 1. Дан массив:
// const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];
// пользователь вводит имя (чз prompt), проверить сколько раз встречается это имя в массиве, либо вывести сообщение что такого имени нет

// 2. Дан массив: [32, -41, 0, 12, 67, 12, -34]
// На основе этого массива, сформировать новый массив в котором все числа будут противоположны по знаку


//  1.

const arr = ['Valerchik', 'Olegik', 'Mitrofan', 'Valerchik', 'Evlampij', 'Olegik', 'Valerchik'];

let userName = prompt("Введите имя: ");
let count = 0;

for(let i = 0; i < arr.length; i++) {
    if(userName === arr[i]){
        count++;
    }

}
if(count === 0){
    console.log(`Имени ${ userName} нет в списке`);
}else{
    console.log(`Имя ${userName} повторяется ${count} раз`);
}

//  2. 

const arr2 = [32, -41, 0, 12, 67, 12, -34];

let newArr = arr2.map(function(num){
    return -num;
});

console.log(newArr);

