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

function classNameEditor() {
  let classes = [];
  return function(className, isAddingClass){
    if(!classes.includes(className) && isAddingClass){
      classes.push(className);
    } else if(classes.includes(className) && !isAddingClass){
      classes.splice(classes.indexOf(className), 1);
    }
    return classes.join(' ');
  }
  }

  const classNameEditorFunc = classNameEditor();

  
  console.log(classNameEditorFunc());
  console.log(classNameEditorFunc('test', true));
  console.log(classNameEditorFunc('test', true));
  console.log(classNameEditorFunc('smth', true));
  console.log(classNameEditorFunc('test', false));
  console.log(classNameEditorFunc('test', false));