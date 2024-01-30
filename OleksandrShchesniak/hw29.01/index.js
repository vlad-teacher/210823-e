// 3.
// Создать функцию classNameEditor(), задача которой "управлять" css-классами.
// Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true,
// то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса.
// Функция всегда должна возвращать текущее значение css-класса.

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)

function classNameEditor(className, bool) {
    const target = document.getElementById("element");
  
    if (!target) {
      return '';
    }

    let classes = target.className.split(' ');

    bool ? classes.includes(className) || classes.push(className) : 
    classes.includes(className) && classes.splice(classes.indexOf(className), 1);
  
        // if (bool && classes.indexOf(className) === -1) {
    //     classes.push(className);
    // } else if(!bool && classes.indexOf(className) !== -1){
    //   classes.splice(classes.indexOf(className), 1);
    // }

    target.className = classes.join(' ').trim();
    return target.className;
  }
  
  console.log(classNameEditor());
  console.log(classNameEditor('test', true));
  console.log(classNameEditor('test', true));
  console.log(classNameEditor('smth', true));
  console.log(classNameEditor('test', false));
  console.log(classNameEditor('test', false));