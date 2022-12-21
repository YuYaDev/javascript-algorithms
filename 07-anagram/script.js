/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const firstWord = str1.toLowerCase()

    const secondWord = str2.toLowerCase()

    if ((firstWord === secondWord) || (firstWord.length !== secondWord.length)) {
        return false
    }
    return firstWord.split('').sort().join('') === secondWord.split('').sort().join('');

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('UP', 'up')); // true
console.log(anagram('hello', 'bye')); // false