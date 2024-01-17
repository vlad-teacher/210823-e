function hyphenDestroyer(str){
let str1 = str.replaceAll('-', ' ');
console.log(str1); 
}

hyphenDestroyer("background-color");


// + 3.
// Напишите функцию hyphenDestroyer(), которая преобразует
// строки вида «my-short-string» в «my short string».
// То есть, дефисы удаляются и вместо них появляются пробелы.
// Например:
// hyphenDestroyer ("background-color") === 'background сolor';
// hyphenDestroyer ("list-style-image") === 'list style image';
// hyphenDestroyer ("-webkit-transition") === 'webkit transition';