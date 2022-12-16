"use strict";
// TODO 1 (class="items-section"):
//  Добавить по одному изображению из массива
//  после каждого элемента с классом item_title



// получить все элементы с классом item_title
// HtmlCollection, нельзя перебрать методом foreach,
// можно создать массив на основе коллекции и перебрать массив методом foreach
let itemTitles = document.getElementsByClassName("item_title");
// NodeList, можно перебрать методом foreach
itemTitles = document.querySelectorAll(".item_title");

console.log(itemTitles);
let images = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/1000/1000?random=3"
];
for (let i = 0; i < itemTitles.length; i++){
    console.log(itemTitles[i]);
    // создание html элемента
    // после создания элемент автоматически не появляется в html
    let img = document.createElement("img");
    console.log(img);
    // добавление атрибутов
    img.setAttribute("src", images[i]);
    // добавление элемента в html
    itemTitles[i].after(img);
}

// TODO 2 (class="items-section"):
//  Уменьшить стоимость каждого товара в 2 раза
// element.innerText для получения/добавления текста
document.querySelectorAll(".item__price")
    .forEach(element => element.innerText = element.innerText / 2);
    //.forEach(element => element.innerText = parseInt(element.innerText) / 2);


// TODO 3 (class="cards-section"):
//  Отобразить информацию о товарах,
//  информацию о каждом товаре отображать в отдельном div:
//  <div class="card"> +
//     <h2>название</h2> +
//     <img class="card__image" src=""> изображение +
//     <p>стоимость</p> +
//     <div class="card__count-info">
//         <button>-</button>
//         <span>количество</span>
//         <button>+</button>
//     НО если значение count равно 0, вывести в <div class="card__count-info"> - Нет в наличии
//     </div>
//  </div>


let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/1000"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/1000"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/1000"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/1000"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/1000"
    }
};

let cardsSection = document.querySelector(".cards-section");
// Object.values(goods) - массив значений объекта goods
for (let x of Object.values(goods)) {
    let card = document.createElement("div"); // div
    card.classList.add("card"); // div class="card"

    let title = document.createElement("h2"); // h2
    title.innerText = x.title; // <h2>текст</h2>

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", x.img); // img.src = x.img

    let price = document.createElement("p");
    price.innerText = x.price;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (x.count > 0) {
        count.innerHTML =
            `<button>-</button>
             <span>${x.count}</span>
             <button>+</button>`;
        /*count.innerHTML =
             "<button>-</button>" +
             "<span>" + x.count + "</span>" +
             "<button>+</button>";*/
    } else {    // count.innerText = <span>Товара нет в наличии</span>
        count.innerHTML = "<span>Товара нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
}

/*
let cardsSection = document.querySelector(".cards-section");
for (let i = 0; i < 3; i++){
    cardsSection.innerHTML = `<p>1000</p>`;
}
*/

// TODO 4 (class="books-section"): Отобразить информацию о книгах
//  (пример на изображении)
/* для каждого жанра отдельный div:
<div> name
    <h2></h2> nameGenre
    <div class="books"> booksDiv
        <article> artic
            <span>название книги</span> nameBook
            <img> img
            <p>описание</p> description
            <a>Читать</a> read
        </article>
    </div>
</div>
*/



let booksByGenre = [
    { // <div> или section
        genreName: "Crafts", // <h2></h2> название жанра
        books: [ // <div class="books">
            { // <article>
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

for (let genre of booksByGenre) {
    // div для жанра
    // h2 название жанра genre.genreName
    // div class="books"
    for (let book of genre.books){
        // article со всем содержимым
    }
}

