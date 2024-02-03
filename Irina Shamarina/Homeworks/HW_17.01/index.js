//  Дан объект

const arr = [
    {
      name: "Valerchik",
      age: 23,
    },
    {
      name: "Olejik",
      age: 90,
    },
    {
      name: "John",
      age: 12,
    },
    {
      name: "Mitrofan",
      age: 35,
    },
  ];

//   Создать обьект типа Valerchik:23, Olejik:34 и т.д.

const result = arr.reduce((overall, {name, age}) => ({
    ...overall,
   [name]: age 

  }), {}); 
  console.log(result);

  // 1.проверить есть ли в массиве имя Митрофан

   const mitrofan= arr.find(({name}) => name === 'Mitrofan')
   console.log(mitrofan);

  //2. всем ли 18 лет 

  const isOver18 = arr.every(({age}) => age > 18);
  if (isOver18 ){
    console.log('Всем больше 18');
  }else{
    console.log('Есть несовершеннолетние');
  }


  //3. с помощью filter оставить в массиве объекты длина имени котрых больше 6 

  const newArr = arr.filter(({name}) => name.length > 6);
  console.log(newArr);
    
  
  // 4. с помощью меотда reduce Сформировать строку вида 'Hello Valerchik and Olejik ...'

  const messege = arr.reduce((acc, {name}, index) => {
    return `${acc} ${name} ${index < arr.length - 1? 'and': ''}`;
  },"Hello");

  console.log(messege);
  

   
       