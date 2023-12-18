// new Array()

const arr = new Array(10);
// new Array создаёт массив длинной в кол-во заданных элементов (10 в нашем случае)

arr.fill(1);
// заполняет массив единицамы на все 

console.log(arr);

// spread
// "..."

arr2 = [1,2,3,4,5];
arr3 = [a, b , c]
console.log(...arr2, 'new value', ...arr3, 'smth else');
// spread (...) тупо выплёвывает ВСЁ из массива, получится 1 2 3 4 5 

// destructuring



