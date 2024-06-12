// Задание 
/* создать функцию classNameEditor() задача которой уравлять css -классами. Функция должна принимать строку с названием css -класса и булево значение. Если булево значение true функция должна добавлять переданый css -класс, если false - найти и удалить значение из css -класса. Функция всегда должна возвращать текущее значение  css -класса.


classNameEditor()  - вернется пустая строка
classNameEditor('test', true)  -  'test'  - добавляет css -класс
classNameEditor('test', true)  - 'test' - пытались еще раз добавить, не должно быть дубликата
classNameEditor('smth', true)  - 'test smth' - добавили класс 'smth'
classNameEditor('test', false)  -  'smth'  -удалили класс 'test'
classNameEditor('test', false) - удален класс 'test'  еще раз*/

function makeClassNameEditor (){
    let classNames = '';
    
   return function (className, add){
          const classes = classNames.split(' ').filter(Boolean);
          const index = classes.indexOf(className);

          if(add && index === -1){
            classes.push(className);
          }else if(!add && index !== -1){
            classes.splice(index, 1);
          }
          
          classNames = classes.join(' ');
          return classNames;
         }
         
    }

    const classNameEditor = makeClassNameEditor();
    console.log(classNameEditor());
    console.log(classNameEditor('test', true));
    console.log(classNameEditor('test', true));
    console.log(classNameEditor('smth', true));
    console.log(classNameEditor('test', false));
    console.log(classNameEditor('test', false));
    

    



