"use strict";

let sales = () => {
    return {
        a15d25e1: 10, // в процентах
        d137d16e: 15, // в процентах
        "936b4763": 30, // в процентах
    }
};

// TODO (1) при нажатии на контейнер отображать скидку и удалять обработчик события
let container = document.getElementById("sale_container");
container.addEventListener("click", showSale);

function showSale(event) /* ({target}) */ { // this
    console.log(event);
    // целевой элемент event.target, тот элемент, на котором произошло событие
    let clickElem = event.target; // let clickElem = target;
    console.log(clickElem);

    // dataset - все data-* атрибуты элемента
    // <p data-sale="d137d16e">Скидка</p>
    // <p data-sale="936b4763">Скидка</p>
    let saleCode = clickElem.dataset.sale; // "936b4763"
    console.log(saleCode);
    if (saleCode !== undefined) { // значит клик произошел на p
        /*
        if (clickElem.innerText === "Скидка") {
            clickElem.innerText = sales()[saleCode] + "%";
        } else {
            clickElem.innerText = "Скидка";
        }
        */
        // отобразить размер скидки
        console.log(sales());
        console.log(sales()[saleCode]);
        clickElem.innerText = sales()[saleCode] + "%";
        // clickElem.style.backgroundColor = "yellow";
        clickElem.style.cssText =
            `
                background-color: yellow;
                color: black;
            `;
        // удаление обработчика события
        // нельзя использовать анонимные функции,
        // если обработчик, добавленный через addEventListener
        // необходимо удалять
        // container.removeEventListener("click", showSale);
        this.removeEventListener("click", showSale);
    }
}


// TODO (2) менять цвет фона body на выбранный пользователем
//  значение цвета - значение атрибута value радиокнопок
let colorsRadio = document.forms["change-color"].elements.color;
// RadioNodeList
for (let btn of colorsRadio) {
    btn.addEventListener("focus", function () {
        document.body.style.backgroundColor = this.value;
    });
    /*btn.addEventListener("focus", () =>
        document.body.style.backgroundColor = btn.value
    );*/
}

/*
document.forms["change-color"].elements.color
    .forEach(btn => btn.addEventListener("focus", () =>
        document.body.style.backgroundColor = btn.value));
*/

/* TODO (3) разблокировать поле, если чекбокс был отмечен */
// элемент.disabled = true
// элемент.disabled = false

// чекбокс/радиокнопка.checked
// элемент <input type="checkbox" name="add-info">
// событие click
let checkbox = document.forms.lesson.elements["add-info"];
checkbox.addEventListener("click", function (){
    /*if (checkbox.checked /!* === true *!/) {
        document.forms.lesson.elements.info.disabled = false;
    } else {
        document.forms.lesson.elements.info.disabled = true;
    }*/
    document.forms.lesson.elements.info.disabled = !checkbox.checked;
});

/* TODO (4) собрать выбранные языки и страны в массив */
document.forms.lesson.addEventListener("submit", function (event){
    event.preventDefault();

    let langs = [];
    let countries = [];

    for (let langInput of this.elements["lang[]"]) {
        if (langInput.checked) langs.push(langInput.value);
    }
    for (let option of this.elements.countries){
        if (option.selected) countries.push(option.value);
    }
    console.log(langs, countries);
});