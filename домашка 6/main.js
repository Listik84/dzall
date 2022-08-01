// домашка 6
// написать функцию для сортировки по убыванию
// let arr = [5, 2, 1, -10, 8];
// // ... ваш код для сортировки по убыванию
// alert( arr ); // 8, 5, 2, 1, -10


// Вариант 1
// -------------
let arr = [5, 2, 1, -10, 8];
function sortArr(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}
alert(arr.sort(sortArr));


// Вариант 2
// -------------
// let arr = [5, 2, 1, -10, 8];
// alert(arr.reverse(arr.sort((a, b) => a - b)));


// Вариант 3
// -------------
// let arr = [5, 2, 1, -10, 8];
// function sortArr(a, b) {
//   return b - a
// }
// alert(arr.sort(sortArr));