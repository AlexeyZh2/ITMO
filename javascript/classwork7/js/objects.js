"use strict";
// объекты типа Object
// TODO: Задание 1
//  1. объявить пустой объект, ссылку на него присвоить переменной userData
let userData = {};
//  2. добавить в объект свойство name со значением Paul
userData.name = "Paul";
console.log(userData);
//  3. добавить в объект свойство свойство age со значением 23
userData.age = 23;
//  4. добавить в объект свойство
//     favourite colors со значением  ["red", "orange", "yellow"]
// userData.favouriteColors = ["red", "orange", "yellow"];
userData["favourite colors"] = ["red", "orange", "yellow"];
//  5. вывести в консоль значение свойства age
console.log(userData.age);
//  6. вывести в консоль значение свойства name
console.log(userData.name);
//  6. вывести в консоль значение свойства favourite colors
console.log(userData["favourite colors"]);

// let a = userData.age + userData.name;

// 7. вывести в консоль все цвета (использовать цикл) объекта userData
for (let elem of userData["favourite colors"]){
    console.log(elem);
}

// 8. задать цвет фона body (document.body.style.backgroundColor = цвет),
//    цвет должен выбираться случайным образом из свойства 'favourite colors'
let colors = userData["favourite colors"];
document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

// 9. объявить 2 объекта со свойствами title и pageCount
// - для первого объекта значение свойства title - "JavaScript", pageCount - 780,
//   ссылку на объект присвоить переменной jsBook
// - для второго объекта значение свойства title - "CSS 3", pageCount - 1200
//   ссылку на объект присвоить переменной cssBook
let jsBook = {
    title: "JavaScript",
    pageCount: 780,
};
let cssBook = {
    title: "CSS 3",
    pageCount: 1200,
};
// 10. добавить объекту userData свойство favouriteBooks со значением -
//    массив, который содержит jsBook и cssBook
userData.favouriteBooks = [jsBook, cssBook];

// 11. вывести объект userData в консоль
console.log(userData);
// 12. вывести в консоль pageCount последней книги из свойства favouriteBooks
let books = userData.favouriteBooks;
console.log(books[books.length - 1].pageCount);
// 13. вывести названия книг объекта userData,
// количество страниц которых больше 1000 - цикл

for (let book of userData.favouriteBooks) {
    if (book.pageCount > 1000) {
        console.log(book.title);
    }
}

/*userData.favouriteBooks.forEach((elem, index, arr) => {
    if (elem.pageCount > 1000) {
        console.log(elem.title);
    }
});*/

// обращение к несуществующему свойству
console.log(userData.photo); // undefined

// проверка на наличие свойства в объекте
// 1. сравнить с undefined
if (userData.photo === undefined) {
    userData.photo = "default.svg";
}

// 2. использование оператора in
console.log("githubLink" in userData); // false
// если свойства "githubLink" в объекте userData не существует,
// добавить его и присвоить значение null
if (!("githubLink" in userData)) {
    userData.githubLink = null;
}

// удаление свойства
// удалить свойство githubLink из объекта userData
delete userData.githubLink;

cssBook = {
    title: "CSS 3",
    pageCount: 1200,
};
// получить массив ключей (свойств) объекта
let userDataKeys = Object.keys(userData);
console.log(userDataKeys);

// получить массив значений объекта
let cssValues = Object.values(cssBook);
console.log(cssValues);

// массив пар [[ключ, значение], [ключ, значение]]
let cssBookEntries = Object.entries(cssBook);
console.log(cssBookEntries);

cssBook = {
    title: "CSS 3",
    pageCount: 1200,
};
// перебор объектов осуществляется циклом for in
// на каждой итерации цикла в переменную propName копируется
// НАЗВАНИЕ свойства объекта  (ключ). Не значение
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
let o = {};
for (let propName in items) {
    console.log(propName); // имя свойства
    console.log(cssBook[propName]); // значение свойства
}
// первая итерация цикла
let propName = "title";
console.log(propName); // => console.log("title");
console.log(cssBook[propName]); // => cssBook["title"] => "CSS 3"

// вычисляемые свойства - имя свойства объекта -
// в значении переменной property
let property = prompt("Введите color, если хотите изменить " +
    "цвет текста или backgroundColor, если хотите изменить цвет фона");

let color = prompt("Введите цвет");

let settings = {};
settings[property] = color;

settings = {
    [property]: color
};

// сокращенная запись (свойство из переменной)
function getUnit(health, attack) {
    if (health < 10 || attack < 10) return;
    return {
        type: "battle unit",
        health, // health: health,
        attack // attack: attack
    }
}

let unit = getUnit(34, 78);
console.log(unit.health);
console.log(unit.attack);

// деструктуризация объекта
cssBook = {
    title: "CSS 3",
    pageCount: 1200,
    price: 3000,
};

let {title, pageCount, bookPrice} = cssBook;
console.log(title, pageCount, bookPrice);

let {title: cssTitle, cover: cssCover = "default.png", ...others} = cssBook;
console.log(cssTitle, cssCover, others);

let element = {
    height: 44,
    width: 100,
    color: "red",
    border: "orange"
};

/*
function getPerimeter(block){
    return 2 * (block.height + block.width);
}
console.log(getPerimeter(element));*/

// деструктуризация в параметрах
function getPerimeter({height, width}){
    return 2 * (height + width);
}
console.log(getPerimeter(element));

// методы объекта - функция, объявленная в объекте
settings = {
    color: "yellow",
    "background-color": "orange",
    /*paintElem: function (elem) {

    },*/
    paintElem(elem) {
        // elem.style.color = settings.color;
        // elem.style.backgroundColor = settings["background-color"];
        elem.style.color = this.color;
        elem.style.backgroundColor = this["background-color"];
    },
};
// вызов метода объекта
settings.paintElem(document.body);



