/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {

    const equalsFive = (num) => {
        return num % 5 === 0;
    }
    const equalsThree = (num) => {
        return num % 3 === 0;
    }

    for (let i = 1; i <= num; i++) {
        if (equalsThree(i) && equalsFive(i)) {
            console.log('fizzbuzz');
        } else if (equalsThree(i)) {
            console.log('fizz');
        } else if (equalsFive(i)) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(100));