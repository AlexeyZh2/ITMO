"use strict";



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

// написать функцию, которая принимает на вход объект
// и увеличивает значение свойства price вложенных
// объектов на 10%
function upPrices(someObj){
    for (let x in someObj) {
        someObj[x].price *= 1.1;
    }
}

upPrices(items);
console.log(items);

let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];

// написать функцию, которая принимает на вход массив
// и каждому вложенному объекту добавляет
// свойство price со значением 2000
function addPrice(someArr) {
    for (let x of someArr){
        x.price = 2000;
    }
}
addPrice(books);

// написать функцию, которая принимает на вход массив
// и автора
// функция должна вернуть новый массив,
// в который войдут книги указанного автора
// использовать метод filter

function getBooksByAuthor(someArr, author="Пушкин"){
    return someArr.filter(x => x.author === author);
}

let it = {
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
console.log(it.flute.price); // 900
console.log(it["flute"].price);  // 900
console.log(it.harp.title); // "Арфа"
console.log(it["harp"].title); // "Арфа"

let someVar = "flute";
console.log(it[someVar].price); // 900

someVar = "harp";
console.log(it[someVar].title); // "Арфа"

console.log(it.someVar); // undefined
console.log(it.someVar.title); // ошибка


