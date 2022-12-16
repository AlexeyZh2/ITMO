"use strict";

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

function generateTable(arr){
    // 1. создание таблицы
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    // 2. получение ключей первого элемента массива
    // для генерации первой строчик (заголовнов)
    let keys = Object.keys(arr[0]);
    // 3. создание первого ряда
    let firstRow = table.insertRow();
    firstRow.classList.add("first-row");
    // 4. перебор ключей первого элемента массива,
    // наполнение ряда ячейками в цикле
    for (let key of keys) {
        let cell = firstRow.insertCell();
        cell.innerText = key.toUpperCase();
    }

    // 5. передор массива для создание рядов по количеству элементов массива
    for (let elem of arr) {
        let row = table.insertRow();
        // 6. вложенный цикл (перебор объекта) -
        // наполнение ряда ячейками
        for (let prop in elem){
            let cell = row.insertCell();
            cell.innerText = elem[prop];
        }
    }
    // 7. добавление таблицы в html
    document.body.append(table);
}
generateTable(articles);

function generateField(n) {
    if (n < 3) return;
    // генерация поля n x n
    // добавление поля в html

    // let cells = получить все ячейки

    // три раза - цикл for на 3 итерации:
    // let randomCell = cells[рандомный индекс]
    // randomCell - добавить атрибут
}