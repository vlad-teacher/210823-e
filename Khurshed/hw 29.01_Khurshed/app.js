function checkClassName() {
  let classDate = [];
  let classOut = "";

  return function (className, addOrRemoveClass) {
    let hasClassDateCLass = classDate.includes(className);
    if (!hasClassDateCLass && addOrRemoveClass) {
      classDate.push(className);
      classOut = `Добавили класс ${className}`;
    } else if (hasClassDateCLass && addOrRemoveClass) {
      return (classOut = `Попытались добавить ${className} еще раз (не должно быть дублирующих классов)`);
    }

    if (hasClassDateCLass && !addOrRemoveClass) {
      classDate.splice(classDate.indexOf(className), 1);
      classOut = `удалили класс ${className}`;
    } else if (!hasClassDateCLass && !addOrRemoveClass) {
      return (classOut = `Попытались удалить ${className} еще раз (это невозможно, так как класс уже удален)`);
    }
    return `${classDate.join(" ")} - ${classOut}`;
  };
}

let classNameEditor = checkClassName();

console.log(classNameEditor("text", true));
console.log(classNameEditor("text", true));
console.log(classNameEditor("smth", true));
console.log(classNameEditor("text", false));
console.log(classNameEditor("text", false));
