// Домашка №4(до 27.06. 00-00)

// Напишите функцию, которая возвращает новый объект без указанных ключей со значениями.

// ({ b: 2, c: 3 }, 'b') => { c: 3 }

// const data = { a: 1, b: 2, c: 3 };

// console.log(without(data, 'b')); // { a: 1, c: 3 }


const withoutKeys = (obj, key1) => {
  let newObj = {};
  for (key in obj){
    if (key !== key1){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(withoutKeys ({ b: 2, c: 3 }, 'b'));