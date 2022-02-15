/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    let arr = [];
    let elem = 2;
    for (let i = 0; i <= num - 2; i++) {
        arr[i] = elem;
        elem++;
    }
    let i = 2;
    while (i <= num) {
        for (let j = i * i; j <= num; j += i) {
            arr[arr.indexOf(j)] = 0;
        }
        arr = arr.filter(item => item !== 0);
        i = arr[arr.indexOf(i) + 1];
    }
    return arr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]