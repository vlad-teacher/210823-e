// task 3

const lengthSix = arr2.filter(({ name }) => name.length > 6);
console.log(lengthSix);


// task 4

const strNames = arr2.reduce((acc, { name }, index, arr) => {
  if (index === arr.length - 1) {
    acc = acc + name;
  } else {
    acc = acc + name + " and ";
  }
  return acc;
}, "Hello ");

console.log(strNames);
