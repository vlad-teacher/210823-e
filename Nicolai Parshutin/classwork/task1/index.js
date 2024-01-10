    //2.2
const arr1 = [2,4,5,6,1,2,7,3,4];
const arr2 = [];
for(let i = 0; i < arr1.length; i++){
    for(let j = i+1; j <arr1.length;j++){
        if(arr1[i]===arr1[j] && !arr2.includes(arr1[i])){
            arr2.push(arr1[i]);
        }
    }
}
console.log(arr2);

    //2.1
const arr3 = [2,4,5,6,1,2,7,3,4];
const arr4 = [];
for( let i = 0; i < arr3.length; i++ ){
    if(arr3.indexOf(arr3[i]) === arr3.lastIndexOf(arr3[i])){
        arr4.push(arr3[i])
    }
}

console.log(arr4);