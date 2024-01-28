// # Callback

// Написать функцию которая принимает массив строк (имена) и два колбэка.
// функция добавляет к каждому элементу массива фамилию "Smith" после чего передает 
// получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное
// им значение нужно передать во второй колбэк.

// **1ый колбэк**: это функция которая принимает массив строк, добавляет к каждой строке
// "Mr. " и возвращает получившийся массив.
// **2ой колбэк**: функция которая принимает массив строк и выводит через alert() каждый
// элемент массива. 

// function proccesName (arrayNames, callbsckFirst, callBackSecond){

//     const namePlusSmit = arrayNames.map(function(name){
//         name + ' Smith';
//     })
//     const result1 = callbsckFirst(namePlusSmit );

//     const result2 = callBackSecond(result2);
//     }
    











// ## Arrays

// 1. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. 
// ```js
// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]
// ```

function doubleNum (arr){

    return arr.filter((element, index, array) => array.indexOf(element) !== index) ;
   
}

const arrNumbers = [1,1,1,4,4,5,1,6,6,74,74,74,3];

const arrDoubleNumbers = doubleNum(arrNumbers);

console.log(`массив из тех чисел которые повторялись ${arrDoubleNumbers}`);

// 2. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив
// `reduce()` и вернуть тот массив сумма элементов которого
// наибольшая.

const arrays = [
    [1,4,5],
    [3,5,7,3,5],
    [3,5,2,6],
    [4,64,3]
]
const sumOfArrays = arrays.reduce(function(previousValue, currentValue){
    const sumOfCurrentArray = currentValue.reduce(function(acc, num){
       return acc + num, 0;
        
    })
    previousValue.push(sumOfCurrentArray)
    return previousValue;
}, [])

function maxNum (arr){
    return Math.max(...arr)
}

const maxArrElement = maxNum(sumOfArrays);
console.log(`массив сумма элементов которого наибольшая ${maxArrElement}`);

// 3. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

const arr2 = [23,1,45,-34,34,56];

const newArr = arr2.filter(num => num >=10 && num <=99 && num % 2 === 0);
console.log(`масив двузначных четных чисел ${newArr}`);



// 4. Дан массив объектов:
// ```js
// const fbTeam = [
//      {
//      playerName:"Messi",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Suarez",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Ronaldo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Buffon",
//      team:"Juventus"
//      },
//      {
//      playerName: 'Valerchik',
//      team: 'Vedrich97'
//      },
//      {
//      playerName:"Gonsalo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Pedro",
//      team:"Chelsea"
//      },
//     {
//      playerName:"Zuma",
//      team:"Chelsea"
//      },
//      {
//      playerName:"PSG",
//      team:"Rico"
//      }
//  ];
// ```
// С помощью метода `reduce()` преобразуйте его в объект вида:

// ```js
// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
// ```

// Игроки должны быть сгруппированы по командам в соответствующие поля объекта `fbPlayersByTeams`.
// Под `{}` в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)

const fbTeam = [
          {
          playerName:"Messi",
          team:"Barcelona"
          },
          {
          playerName:"Suarez",
          team:"Barcelona"
          },
          {
          playerName:"Ronaldo",
          team:"Juventus"
          },
          {
          playerName:"Buffon",
          team:"Juventus"
          },
          {
          playerName: 'Valerchik',
          team: 'Vedrich97'
          },
          {
          playerName:"Gonsalo",
          team:"Juventus"
          },
          {
          playerName:"Pedro",
          team:"Chelsea"
          },
          {
          playerName:"Zuma",
          team:"Chelsea"
          },
          {
          playerName:"Rico",
          team:"PSG"
          }
      ];

      const juventusPlayer = fbTeam.reduce((accumulator, currentPlayer) => {
      if (currentPlayer.team === 'Juventus'){
        accumulator.push(currentPlayer)
      }
      return accumulator
    }, [])
    
    const psgPlayer = fbTeam.reduce((accumulator, currentPlayer) => {
        if (currentPlayer.team === 'Psg'){
          accumulator.push(currentPlayer)
        }
        return accumulator
    }, [])

    const chelseaPlayer = fbTeam.reduce((accumulator, currentPlayer) => {
        if (currentPlayer.team === 'Chelsea'){
          accumulator.push(currentPlayer)
        }
        return accumulator
    }, [])

    const vedrich97Player = fbTeam.reduce((accumulator, currentPlayer) => {
        if (currentPlayer.team === 'Vedrich97'){
          accumulator.push(currentPlayer)
        }
        return accumulator
    }, [])

    const barselonaPlayer = fbTeam.reduce((accumulator, currentPlayer) => {
        if (currentPlayer.team === 'Barcelona'){
          accumulator.push(currentPlayer)
        }
        return accumulator
    }, [])



    

    const fbPlayersByTeams = {
             Juventus: [...juventusPlayer],
             PSG: [...psgPlayer],
             Chelsea: [...chelseaPlayer],
             Vedrich97: [...vedrich97Player],
             Barcelona: [...barselonaPlayer]
    };
    console.log(fbPlayersByTeams);

 
