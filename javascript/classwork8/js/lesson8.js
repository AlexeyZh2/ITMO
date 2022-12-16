'use strict';
// ссылочные и примитивные типы
// передача по ссылке и копирование
let x = 12; // 32 - x
let y = x;  // 12 - y
x += 20;
console.log(x);
console.log(y);

let xArr = [2, 7, 90]; //  yArr - [2, 7, 90] - xArr
let yArr = xArr;
for (let i = 0; i < xArr.length; i++) {
    xArr[i] += 2;
}
console.log(xArr);
console.log(yArr);

function changeArgs(number, obj) {
    number += 10;
    obj.title = obj.title.toUpperCase();
}

let num = 0;
let book = {
    title: "Название книги"
};
changeArgs(num, book);
console.log(num);
console.log(book);

//последовательность выполнения кода
common();

function aFn(){
    console.log("aFn");
}

function common(){
    aFn();
    cFn();
}

function bFn(){
    return "bFn";
}

function cFn(){
    console.log(bFn());
}

// всплытие (hoisting) функций — это механизм в JavaScript,
// в котором объявления именованных функций,
// передвигаются вверх своей области видимости перед тем, как код будет выполнен.

// до выполнения кода интерпретатор JavaScript загружает в память функции,
// объявленные как function declaration (именованные),
// в результате функцию function declaration (именованные) можно вызвать ещё до того,
// как до неё дойдёт построчное выполнение кода.

// область видимости function declaration (именованных) - функция

// Переменные, объявленные через var:
// 1. ключевое слово var используется для объявления переменных
// 2. область видимости var переменных - функция
// 3. объявления var всплывают (само объявление, значение при этом равно undefined),
// те можно обратиться к var переменной до ее объявления,
// например:
a = 45;
var a;
console.log(a);


// arguments - псевдомассив (можно итерировать, элементы хранятся по индексу,
// но нельзя использовать методы массивов)
// аргументов функций

// 1. В JavaScript любая функция может быть вызвана с произвольным количеством аргументов
// 2. Доступ к аргументам, которые передаются в функцию может осуществляться
// через псевдомассив arguments
// 3. В современном стандарте arguments отделены от локальных переменных функции
// (нельзя изменить значение локальной переменной через arguments[индекс])

function printAll(a, b) {
    console.log(arguments); // [6, 8, 90, 12, 67]
    console.log("a = " + a);
    console.log("b = " + b);

    // нельзя изменить значение локальных переменных через arguments,
    // те инструкция
    arguments[0] = "новое значение для первого аргумента"; // не повлияет на значение a

    console.log("a = " + a);

    for (let arg of arguments) {
        console.log(arg);
    }
}

printAll(45, 89, 34, -1);

// this - контекст вызова функции
let itemInfo = {
    id: 125,
    title: "Букет",
    price: 3200,
    // printInfo: function (){},
    printInfo(){
        console.log(`Название товара: '${this.title}'. Стоимость: ${this.price} руб.`);
    }
};

itemInfo.printInfo();
// Название товара: 'undefined'. Стоимость: undefined руб.
setTimeout(itemInfo.printInfo, 300);
// JS функции - объект типа Function
// свойства: lexicalEnvironment, scope
// методы: bind - передача контекста, call, apply
// - имяФункции.bind() / имяФункции.call() / имяФункции.apply()
// привязка контекста (this)

setTimeout(itemInfo.printInfo.bind(itemInfo), 700);

// стрелочные функции не имеют своего this и arguments

// в чем отличие методов .map от .foreach?
// map - создание нового массива, исходный массив не меняется
// foreach - исходный массив меняется

// в чем отличие перебор методом foreach от перебора циклом for?
// в чем отличие цикла for от цикла for of?
// в чем отличие цикла for of от цикла for in?
// что будет, если перебрать массив циклом for in?
let someArr = [3, 8, 10];

for (let propName in someArr) {
    console.log("propName " + someArr[propName]);
    console.log("propName " + propName);
}

// что такое замыкание?