"use strict";
class Author {
    #privateProperty = 'приватное свойство';
    #email; // приватное свойство
    _age; // псевдоприватное свойство

    constructor(emailValue) {
        this.email = emailValue;
    }

    // сеттеры - проверяем входящие данные, устанавливаем значение свойства
    // одно свойстсво - один сеттер
    set age(ageValue){
        if (ageValue < 12) {
            throw new Error("ageValue дб больше 12");
        }
        this._age = ageValue;
    }

    set email(emailValue){
        if (emailValue.length < 4 || !emailValue.includes("@")){
            throw new Error("emailValue должно содержать @");
        }
        this.#email = emailValue;
    }

    // геттеры - возвращают значения свойств
    // одно свойстсво - один геттер
    get age(){
        return this._age;
    }

    get email() {
        return this.#email;
    }
}

class Article {
    text; // значение по умолчанию undefined

    constructor(articleTitle, articleAuthor) { // вызывается в момент создания объекта,
        // сожет принмить на вход любое количетво аргументов,
        // устанавливать значения любых свойств, вызывать любые методы
        if (!(articleAuthor instanceof Author)) {
            throw new Error("articleAuthor дб типа Author");
        }
        this._author = articleAuthor;
        this.title = articleTitle;
        this.date = new Date();
    }
}

let author1 = new Author("fsd@mail");
// author1.#privateProperty - приватное из-за # свойство, к нему
// можно обратиться только в классе

// обращение к сеттеру
author1.age = 14;

// обращение к геттеру
console.log(author1.age);

let article1 = new Article("JavaScript", author1);
let article2 = new Article("CSS 3", author1);
console.log(article1, article2);

// вывести возраст автора статьи article2
console.log(article2._author.age);
console.log(article2._author._age);
// console.log(article2._author.#email); // ошибка
console.log(article2._author.email);




