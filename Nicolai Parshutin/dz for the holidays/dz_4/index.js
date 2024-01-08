const arr = [2,5,7,12,62,23,88,153];
let max = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
        if(arr[i]>max){
            max=arr[i];
        }
        console.log(arr[i]); // Для проверки
    }
}
console.log(`Наибольшее четное число - ${max}`);

// 4. Дан массив 
// выведите в консоль наибольшее ЧЕТНОЕ число из этого массива