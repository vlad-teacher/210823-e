let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];

let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];


//1
// let userName = prompt('Enter your name');
// for(let i = 0;i<people1.length;i++){
//     if(people1[i] === userName){
//         people2.push(userName);
//         break
//     }
// }
// console.log(people2);


//2
// let userName = prompt('Enter your name');
// for(let i = 0;i<people2.length;i++){
//     if(people2[i] === userName){
//         delete people2[i]
//     }
// }
// console.log(people2);


//3
// let newArr = [];
// for(let i = 0;i<people1.length;i++){
//     for(let j = 0;j<people2.length;j++){
//         if(people1[i]===people2[j]){
//             newArr.push(people1[i])
//         }
//     }
// }
// console.log(newArr);


//4
// let arr = [...people1, ...people2];
// let arr1 = Array.from(new Set(arr));
// console.log(arr1);

//4.2
// for(let i = 0;i<people1.length;i++){
//     for(let j = 0;j<people2.length;j++){
//         if(people1[i]===people2[j]){
//             //people1.splice(i,1); // Не удаляет 'Connor'
//          delete people1[i];
//         }
//     }
// }
// let newArr = [...people1, ...people2];
// console.log(newArr);  //Выводит undefined


// + 2.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// + 2.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// + 2.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 2.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.