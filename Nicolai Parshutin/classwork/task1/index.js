    //2.2
const arr1 = [2,4,5,6,1,2,7,3,4];
const arr2 = [];
for(let i = 0; i < arr1.length; i++){
    for(let j = i+1; j <arr1.length;j++){
        if(arr1[i]===arr1[j]){
            arr2.push(arr1[i]);
        }
    }
}
console.log(arr2);