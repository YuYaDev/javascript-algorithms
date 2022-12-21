/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/
function isPrime(n) {
    if (n <= 1) {
        return false
    }
    for (let divider = 2 ; divider <= Math.floor(n / 2); divider++) {
        if (n % divider === 0) {
            return false
        }
    }
    return true
}


function primes(num) {
    const primesArray = []
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            primesArray.push(i);
        }
    }

    return primesArray
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]