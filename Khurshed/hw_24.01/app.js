



//Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к 
// каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. 
// Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.

// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 
// 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

let array = ["Jaden", "Will"]

function foo(arr,cb1,cb2){
  let emptyMassiv = []        
    for(let i = 0; i < arr.length; i++) {
         emptyMassiv[i] = [arr[i]]
         emptyMassiv[i][i + 1] =  " Smith "

  }
    console.log(emptyMassiv)
       cb1(emptyMassiv,cb2)
  
}

function forCb1(arr,cb2) {
  let newArr = []
         for(let i = 0; i < arr.length; i++){
            arr[i].splice(0,0," Mr ")
            newArr.push(arr[i].join(""))
          }



     cb2(newArr)
     console.log(newArr)
}


function forCb2(arr) {
    arr.map((item) => {
       alert(item)
    })
}


console.log(foo(array,forCb1,forCb2))



//1. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]
  let arr1 =  [1,1,1,4,4,5,1,6,6,74,74,74,3];

   function myFuncName(mass){
        let uniqueEls = [];
        let repeatEls = {};

        mass.reduce((accu,item) => {
                  if(!accu[0].includes(item)){
                      accu[0].push(item)
                  }else{
                      accu[1][item]  = item
                  }
                  return accu
        },[uniqueEls,repeatEls])

        repeatEls = Object.values(repeatEls)
         console.log(repeatEls)
         return repeatEls
   }

   myFuncName(arr1)
 



//2. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

   let arr2 = [[1,2,3,4], [4,5,6,7], [8,9,10,11],[8,9,10,141],[222,333,444],[11,12,123],[22,3,4,6],[44,55,123]];

      let res = arr2.map((item,index) => {
        return item.reduce((accu,e,i) => {
              accu += e  
              return accu 
              
        },0)
      })
      res = arr2[res.indexOf(Math.max(...res))]
      console.log(res)


     // 3. Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного. 

      let arr3 = [2,4,5,8,10,12,14,16,18,19,21];

      let res3 = arr3.filter((item) => {
             if(item > 9 && item % 2 == 0){
                 return true
             }
      })

      console.log(res3)
   
 // 4, Дан массив объектов:

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
        team:"PSG "
        }
    ];

    // С помощью метода reduce() преобразуйте его в объект вида:

    // const fbPlayersByTeams = {
    //     Juventus: [{}, {}, {}],
    //     PSG: [{}],
    //     Chelsea: [{}, {}],
    //     Vedrich97: [{}],
    //     Barcelona: [{}, {}]
    //  }
    // Игроки должны быть сгруппированы по командам в соответствующие поля 
    // объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)



    let res4 = fbTeam.reduce((accu,item) => {
    if (accu[item.team] === undefined) {
      accu[item.team] = [item.playerName];
      
  } else {
      accu[item.team].push(item.playerName);
  }
  return accu;
            
    }, {})


     console.log(res4)