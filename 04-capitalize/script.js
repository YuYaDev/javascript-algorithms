/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (str === '') {
        return '';
    } else if (str.split(' ').length > 2) {
        return str.split(' ').map(function (word) {
            return word[0].toUpperCase() + word.slice(1);
        }).join(' ');
    }
    return str[0].toUpperCase() + str.slice(1);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('')); // "Молодость Всё Простит"