const arr = [
    [1,2,3],
    [21,22,23],
    [31,32,33],
    [41,42,43]
];

function getMaxArr(arr){
    let sumArr = 0;
    let maxSumArr = 0;

  for(let i = 0;i<arr.length;i++){
        let sumI = 0;
        for(let j = 0;j<arr[i].length;j++){
        sumI+=arr[i][j];
      }
      if(sumI>sumArr){
        sumArr = sumI;
        maxSumArr = arr[i];
      }
    }
    return(maxSumArr);
    }

console.log(getMaxArr(arr));
  


// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины). Функция
// возвращает тот массив сумма элементов которого
// наибольшая.