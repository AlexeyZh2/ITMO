'use strict';
// строки
// примитивный тип
// последовательность символов, которая заключается в
// "",  '' или ``
// строки хранятся в кодировке utf-16 в виде массива символов
// строки в Javascript неизменны, можно лишь создать новую строку
// на основе существующей

// конкатенация строк
let name = "Глеб", surname = "Петров";
let fullName = name + " " + surname; // Глеб Петров
console.log(fullName);

// если один из операндов является строкой,
// то второй операнд будет преобразован в строку,
// потом осуществляется конкатенация строк
console.log('2' + 2); // '22'

// методы строк
let string = 'Поезд';

string = string.toLowerCase(); // приводит к нижнему регистру
console.log(string);

string = string.toUpperCase(); // приводит к верхнему регистру

string = "   javascript     ";
console.log(string.length); // 18

string = string.trim(); // убираем пробелы с начала и конца строки
console.log(string.length); // 10

// includes / startsWith / endsWith
console.log(string.includes("ava")); // true
console.log(string.startsWith("Ja")); // false
console.log(string.endsWith("script")); // true

string = "javascript";
console.log(string[0]); // j
console.log(string[4]); // s

// indexOf - lastIndexOf
// индекс первого вхождения последовательности в строку
// или -1, если символ не найден
console.log(string.indexOf("a")); // 1

string = "javascript";
let letter = "a";
let count = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
        count += 1;
    }
}
console.log(count);

// замена
let date = "12-04-2021";
date = date.replace("-", ".");
console.log(date);
date = date.replaceAll("-", ".");
console.log(date);

// сравнение строк
let str1 = "a";
let str2 = "b";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true

let compareRes = str1.localeCompare(str2);
console.log(compareRes); // -1
// 0 - вернет, если строки равны
// отрицательное число - если str1 меньше str2
// положительное число - если str1 больше str2

// сравнение без учета регистра
compareRes = str1.localeCompare(str2, undefined,
    {sensitivity: "accent"});
console.log(compareRes); // 0

string = "javascript";
// последний символ string.length - 1
string = string.substring(2, 5);
console.log(string); // vas
string = "javascript";
string = string.substring(2);
console.log(string); // vascript

// slice() / substring()


// в цикле пользователь вводит строку,
// необходимо вывести строку следующего вида:
// первая в верхнем регистре, остальные в нижнем
// пользователь должен ввести 0 для завершения

while (true) {  // hEllo
    let input = prompt("Введите строку");
    // null
    if (input === null || input === "0") break;
                             // H + ello
    input = input[0].toUpperCase() + input.substring(1).toLowerCase();
    console.log(input);
}

// даны переменные min и max
// вывести в консоль true, если размер строки, которую вводит
// пользователь попадает диапазон от min до max и false, если нет
let min = 10, max = 22;
string = prompt("Введите строку");
console.log( min < string.length && max > string.length );
if (min < string.length && max > string.length){
    console.log(true);
} else {
    console.log(false);
}

// Дана переменная count
// в зависимости от значения переменной
// вывести в консоль слово товар в правильной форме
// например, 12 товаров, 33 товара, 21 товар и тд
