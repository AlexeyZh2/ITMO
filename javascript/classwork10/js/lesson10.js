"use strict";
let userInfo = () => {
    return {
        name: "Глеб",
        img: "https://picsum.photos/200/200?random=1"
    }
};

/*
* <div>
*   <img>
*   <div>
*      <span>имя</span>
*      <span>текст комментария</span>
*   </div>
* </div>
 */

function addComment(event){
    event.preventDefault(); // отменяет дейсвия, привязанные к событию

    let textArea = document.querySelector("#comment-text");
    let textAreaValue = textArea.value.trim();
    // если значение textAreaValue выходит за диапазон от 1 до 300
    // симолов прервать работу функции
    if (textAreaValue.length < 1 || textAreaValue.length > 300){
        let error = document.getElementById("error");
        error.innerText = "Размер комментария не может быть меньше 1 или " +
            "больше 300 символов";
        return;
    }
    let user = userInfo();

    let commentContainer = document.createElement("div");
    commentContainer.innerHTML =
        `<img src="${user.img}" alt="${user.name}">
         <div>
           <span>${user.name}</span>
           <span>${textAreaValue}</span>
         </div>`;
    document.querySelector(".comments").append(commentContainer);

    this.reset();
}


// 1. элемент, на котором происходит событие
// 2. какое событие будет обрабатывать
// 3. какая функция должна быть вызвана при наступлении события

// 1. элемент - форма
// 2. событие - submit
// 3. функция обработчик - addComment

let form = document.querySelector("form");
// form = document.forms["comment-form"];
// form = document.getElementsByName("comment-form")[0];
// добавление обработчика события
form.addEventListener("submit", addComment);

// 1. у некоторых событий существуют дейсвия по умолчанию
// 2. когда происходит событие формируется объект с информацией
// об этом событии
// 2.1. сформированный объект передается первым аргументом
// в функцию - обработчик


// задача на color-container
let colors = ["#C5CAE9", "#F8BBD0", "#FF8A65", "#E0E0E0"];
// при клике на color-container (событие 'click')
// менять цвет фона элемента на рандомный цвет из массива colors
// цвет фона установить через значение свойства style:
// элемент.style.backgroundColor = colors[]

// 1. элемент, на котором происходит событие: color-container
// 2. какое событие будет обрабатываться: click
// 3. какая функция должна быть вызвана при наступлении события

function changeColor(event){
    console.log(event);
    let randomInd = Math.floor(Math.random() * colors.length);
    this.style.backgroundColor = colors[randomInd];
}
const container = document.getElementById("color-container");
container.addEventListener("click", changeColor);

/*document.getElementById("color-container")
    .addEventListener("click",  () => {
        container.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    })*/

// let titlesP = document.querySelectorAll(".article p:first-child");
// for (let titleP of titlesP){
//     titleP.addEventListener("click", openSibling);
// }
// function openSibling(){
//     this.nextElementSibling.style.display = "block";
// }
// .open { display: block;}
document.querySelectorAll(".article p:first-child")
    .forEach(titleP => {
    titleP.addEventListener("click", () =>

        // titleP.nextElementSibling.style.display = "block"
        titleP.nextElementSibling.classList.toggle("open")
    )
});
// переключаемся на master -> git pull
// переключаемся на свою верку -> commit -> merge с master
