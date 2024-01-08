//1. Пользователь вводит год своего рождения, вывести
//информацию о возрасте пользователя в разные года
//до текущего. Например, вводим «2003». Вывод: «в
//2003 было 1 год», «в 2004 было 2 год», «в 2005 было
//3 год» и т.д
/*
let age = Number(prompt('enter the year of your birthday'));
let thisYear = 2023;
if( isNaN(age)){
    alert('введите число.');
    
}
let x = 0;
for(let i = thisYear-(thisYear-age); i < thisYear;i++){
    x++;
    
    console.log(`В ${i} вам было ${x} год/лет`)
}
*/
//2. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
//каждое последующее число должно быть больше предыдущего, иначе вывести
//ошибку.

let num1 = prompt('enter first number');

let num2 = prompt('enter second number');

let num3 = prompt('enter third number');

let num4 = prompt('enter fourth number');

let num5 = prompt('enter fifth number');

if(num1 > num2 || num2 > num3 || num3 > num4 || num4 > num5){
    alert('enter a NUMBER');
}else{
    console.log('You got it.Nice result');
}