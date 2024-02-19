
function classNameEditor(startCss) {
    let currentCssClass = startCss;
  
    function updateClasses(initialClasses, addCssClass) {
      if (addCssClass) {
        const newClass = 'новыйКласс'; // Замените 'новыйКласс' на желаемый класс для добавления
        currentCssClass += ' ' + newClass;
      } else {
        const indexToRemove = currentCssClass.indexOf(initialClasses);
        if (indexToRemove !== -1) {
          const makeArray = currentCssClass.split(' ');
          makeArray.splice(indexToRemove, 1);
          currentCssClass = makeArray.join(' ');
        }
      }
      return currentCssClass;
    }
  
    return updateClasses;
  }
  
  const updateClassesInstance = classNameEditor('начальныйКласс');
  const add = updateClassesInstance('дополнительныйКласс', true);
  console.log(add);  // Выведет текущее значение css класса после добавления