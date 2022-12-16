'use strict';

/*
let name = prompt("Имя", " ");
console.log(name);

let imgName = prompt("Название изображения", "file1");
console.log(imgName);
*/
// функции - объекты типа Function
// именованные
// функция, которая принимает на вход 2 числа и возвращает результат
// сложение этих чисел
function getSum(a, b) {
    /* тело функции */
    return a + b;
}

let x = 90, y = 7;
let res = getSum(x, y);
console.log(res);

// вызов функции
res = getSum(3, 67);
console.log(res);

// функция принимает на вход 2 числа и возвращает наименьшее
function getMin(a, b) {
    /*if (a < b) return a;
    return b;*/
    /*let min;
    if (a < b) min = a;
    else min = b;
    return min;*/
    return a < b ? a : b;
}

// значения аргументов по умолчанию
function paintBody(color = "green") { /*(color = "green")*/
    document.body.style.backgroundColor = color;
}

paintBody("yellow");
paintBody();

// функция принимает на вход возраст и имя
// если имя не передано, использовать значение по умолчанию - Гость

// если возраст меньше 7 или больше 200 прервать работу функции
// и вернуть строку имя + ", пользователь Вашего возраста не может войти на сайт"

// если возраст больше или равен 7, но меньше 18 прервать работу функции
// и вернуть строку имя + ", пользователь Вашего возраста не может совершать покупки"

// во всех остальных случаях
// вернуть строку имя + ", весь функционал сайта доступен"

// function getGreeting(age, name = "Гость") {
function getGreeting(age, name) {
    name = name || "Гость";
    // age = +age;
    if (age < 7 || age > 200) return `${name}, не может войти на сайт`;
    if (age < 18) return `${name}, не может совершать покупки`;
    return `${name}, весь функционал сайта доступен`;
    // return name + "весь функционал сайта доступен";
}

console.log(getGreeting(45));
console.log(getGreeting(10, "Павел"));

// переменное количество аргументов
function getAvg(...nums) {
    console.log(nums);
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}

let avgRes = getAvg(34);
console.log(avgRes);

avgRes = getAvg(34, 56, 12);
console.log(avgRes);

avgRes = getAvg(7, 12, 8, 44, 1, 0, 45);
console.log(avgRes);

// (обязательные, необязательные=default, ...переменное количество)
// анонимные можно вызвать только после объявления
let lessZero = function (x) {
    return x < 0;
};
// вызов анонимных функций
if (lessZero(-90)) console.log("Отрицательное число");
// функция возвращает новый массив из элементов массива elems,
// которые прошли проверку переданной функцией (fn)
function createArr(fn, ...elems) {
    let arr = [];
    for (let elem of elems){
        if (fn(elem)) arr.push(elem);
    }
    return arr;
}
let arr = createArr(lessZero, 4, -90, 22, 1, 0, -4, -2);
console.log(arr);
arr = createArr(function (x) {
        return x > 0;
    },
    4, -90, 22, 1, 0, -4, -2);
console.log(arr);


// замыкания
function add(x){
    // lexicalEnvironment - хранит переменные, объявленные в функции
    // scope - хранит ссылку на лексическое окружение, в котором была
    // объявлена функция
    let addValue = x;
    return function (num){
        // scope
        return addValue + num;
    }
}
/*String, Number, Function, Array, Boolean*/
let add1 = add(1);
console.log(add1);
console.log(add1(56)); // 57

let add10 = add(10);
console.log(add10(30)); // 40










// анонимные стрелочные

