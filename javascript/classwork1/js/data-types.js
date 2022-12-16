'use strict'; //
// комментарий ctrl + /
/*
    многострочный
    комментарий  ctrl + / + shift
*/

// Javascript (спецификация ECMAScript)
// инструкции выполняются последовательно,
// в конце инструкции ставим ;

// Типы данных:
/*
* 1. примитивные типы
*   1.1 числа (89, -9, 0, 3.12, -67.3 ...)
*   1.2 строки "" '' ``
*   1.3 логический тип (true / false)
*   1.4 null
*   1.5 undefined
*   1.6 bigInt 24259890572485748578457857385n
* 2. ссылочные типы
* */

// переменные
/* объявление переменных let / const / var */
let variableName;  /* camelCase */
/* переменной variableName присвоили значение Данные */
variableName = "Данные";
/* = оператор присваивания */
let age = 30;
let login = "qwerty", password = "qwerty123";
let isActive, closed = true;

age = 27;

/* константы: объявление переменных через const */
/* константам присваивается значение при объявлении */
/* значение константы изменить нельзя */
/* значение константы известно - ВЕРХНИЙ_РЕГИСТР */
const MONDAY_RU = "Понедельник";
const YELLOW = "#ffff00";


/* значение константы неизвестно до загрузки страницы - camelCase */
age = 25;
let age2 = 19;
const averageAge = (age + age2) / 2;

// отладка
console.log("отладка");
console.log(age);
console.log(MONDAY_RU, YELLOW);

console.info("информация");
console.warn("предупреждение");
console.error("Здесь ошибка... Исправьте");

// Числа
age = 65; /* number */
age = 65.5; /* number */
// кроме обычных чисел, существуют специальные числовые значения
// 1. Infinity
// 2. -Infinity
// 3. NaN - Not a Number - ошибка вычисления
console.log(age / 0); // Infinity
console.log(-age / 0); // -Infinity
console.log(isFinite(age / 0)); // false
console.log(isFinite(age)); // true
console.log("Возраст" / age); // NaN ошибка вычисления
console.log(isNaN("Возраст" / age)); // true

// строки
// "" двойные кавычки или '' одинарные кавычки
login = "qwerty";
login = 'qwerty';

// обратные кавычки `` ${}
let loginInfo = `Логин пользователя: ${login}. 2 + 3 = ${2 + 3}`;
console.log(loginInfo);

let greeting = "Добро пожаловать в \"МАГАЗИН\"";
console.log(greeting);
greeting = 'Добро пожаловать в "МАГАЗИН"';
console.log(greeting);
greeting = "Добро пожаловать в 'МАГАЗИН'";
console.log(greeting);

// логический тип (boolean) true / false
isActive = true;
let stopped = false;
console.log(isActive, stopped);

// undefined - значение не было присвоено
let undefinedValue;
console.log(undefinedValue);

// s = 2 * (a*b + a*c + b*c)
let a = 45, b = 9, c = 12;
let s = 2 * (a * b + a * c + b * c);
console.log(s);

let sInfo = `Площадь равна: ${2 * (a * b + a * c + b * c)}`;
console.log(sInfo);

// %
console.log(9 % 8); // 1
console.log(99 % 10); // 9
console.log(993 % 10); // 3
console.log(8 % 2); // 0
console.log(9 % 2); // 1: 4.5 4.5 => 0.5 + 0.5 => 1

// операторы сравнения
// > < >= <=
// == равенство
// != неравенство
// === строгое равенство
// !== строгое неравенство

const MIN = 10;
const MAX = 20;
let len = 12;
console.log(MIN > len); // false 10 > 12
console.log(MIN <= len); // true 10 <= 12
console.log(MIN <= 10); // true 10 <= 10

let first = '1200';
let second = 1200;

console.log(first == second); // true
console.log(first === second); // false, тк типы данных разные

console.log(6 % 2 !== 0);

// тернарный оператор ? :
// const MIN = 10;
let loginLen = 4;
let result = loginLen <= MIN ? "Ошибка ввода" : "Логин введен верно";
// let result = 4 <= 10 ? "Ошибка ввода" : "Логин введен верно";
console.log(result); // Ошибка ввода


