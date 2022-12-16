"use strict";

let bookSection = document.getElementById("books");
let books = localStorage.getItem("books");
if (!books) {
    bookSection.innerText = "В списке нет книг";
} else {
    books = JSON.parse(books);
    for (let book of books){
        let p = document.createElement("p");
        p.innerText = book.title;
        p.style.backgroundColor = book.color;
        bookSection.append(p);
    }
}

