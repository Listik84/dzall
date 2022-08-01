// Домашка №7(до 08.07. 00-00)

// написать функцию для подсчета суммы чисел из массива

// let arr = [[1, [2] ], 4, [5]] = 12;
// ------------------------------------------


1.
let arr = [[1, [2]], 4, [5]];
function sum(arr) {
    return arr.reduce((a, c) => a + (Array.isArray(c) ? sum(c) : c), 0)
}
console.log(sum(arr));


// 2.
// let arr = [[1, [2]], 4, [5]];
// sum = arr.flat(Infinity).reduce((a,c)=> a+c,0);
// console.log(sum);

