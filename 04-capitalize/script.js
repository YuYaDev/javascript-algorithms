/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (str.trim().length < 2) {
        return str.trim().toUpperCase();
    }

    return str.trim().split(' ').map(function (word) {
        word = word.trim()
        if (word !== '') {
            return word[0].toUpperCase() + word.slice(1);
        }
    }).join(' ');

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('sолодость  xВсё  vростит')); // "Молодость Всё Простит"
