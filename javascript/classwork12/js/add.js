"use strict";
/*valueMissing: возвращает true,
    если у элемента есть атрибут required, но не введено значенение*/
document.forms["add-book-form"]
    .elements.title
    .addEventListener("input", function () {
        if (this.validity.valueMissing) {
            this.nextElementSibling.innerText = "Необходимо ввести значение";
            return;
        }
        if (this.validity.tooShort) {
            this.nextElementSibling.innerText = `Минимальное количество символов ${this.minLength}`;
            return;
        }
        if (this.validity.tooLong) {
            this.nextElementSibling.innerText = `Максимальное количество символов ${this.maxLength}`;
            return;
        }
        this.nextElementSibling.innerText = "Поле заполнено верно";
    });

function addBook(event){
    event.preventDefault(); // title от 3 до 100 символов
    let title = this.elements.title;
    // проверка

    title = title.value;
    let color = this.elements.color.value;

    let bookInfo = {title, color}; // информация об одной книге
    console.log(bookInfo)
    /*{ // имя перменной, в которой хранится value объекта
        // и ключ объекта одинаковые
        title: title,
        color: color
    }*/
    // получили значение по ключу books
    let books = localStorage.getItem("books");
    console.log(books);
    // если books не равен null, преобразовываем json строку
    // в массив объектов
    if (books /* !== null */) books = JSON.parse(books);
    // если books равен null, значит создаем пустой маасив
    else books = [];

    books.push(bookInfo);

    console.log(JSON.stringify(books));
    localStorage.setItem("books", JSON.stringify(books));

}
document.forms["add-book-form"].addEventListener("submit", addBook);

