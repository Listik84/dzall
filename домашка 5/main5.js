// Домашка №5(до 01.07. 00-00)

// Напишите функцию, которая принимает массив строк и  возвращает  строку, заменяя null на ваше имя.

// ['hello', 'i', 'am', null] -> 'hello i am henadzi'


const array = ['hello', 'i', 'am', null]
const delFromArray = (value) => {
    let index = array.indexOf(value);
    array.splice( index , 1, 'Yauheni')
    return array.join(" ")
}
console.log(delFromArray());