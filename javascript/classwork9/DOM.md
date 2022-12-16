## DOM (Document Object Model)
Объектная модель, используемая для XML/HTML-документов. Всё, что есть в HTML, находится и в DOM. 

## Основные узлы DOM
1. Документ
2. Узел с типом 'элемент' - каждый HTML-тег образует такой узел дерева, вложенные в него теги - дочерние узлы.
3. Узел с типом 'текст' (текстовый узел) – содержит сам текст. Текстовый узел содержит исключительно строку текста и не может иметь потомков.
4. Узел комментариев

## Перемещение по DOM (только для чтения):
если узел не найден, то в значении свойства получим null
1. `document` - объект document, вход в DOM;
2. `document.body`  - доступ к body;
   `let list = document.getElementById("list");` - получение объектов по id
3. `list.childNodes` - все дочерние узлы;
4. `list.children` - все дочерние узлы-теги;
5. `list.firstChild` / `list.lastChild` - первый / последний дочерний узел;
6. `list.firstElementChild` / `list.lastElementChild` - первый / последний дочерний узел-тег;
7. `list.previousSibling` / `list.nextSibling` - предыдущий / следующий соседний узел;
8. `list.previousElementSibling` / `list.nextElementSibling` - предыдущий / следующий соседний узел-тег;
9. `list.parentNode` - родительский узел;
10. `list.parentElement` - родительский узел-тег.

## Поиск элементов в DOM дереве:
1. по значению атрибута id
`let elem = document.getElementById("slider");`
2. по значению атрибута name, возвращает коллекцию, даже если элемент один
`let elements = document.getElementsByName("answer");`
3. по имени тега, возвращает коллекцию, даже если элемент один
`let elements = document.getElementsByTagName("li");`
4. по имени css класса, возвращает коллекцию, даже если элемент один
`let elements = document.getElementsByClassName("orange-border");`
5. по css селектору, возвращает первый элемент, который удовлетворяет указанному css селектору
`let elem = document.querySelector("ul > li");`
6. по css селектору, возвращает коллекцию элементов, которые удовлетворяют указанному css селектору
`let elemsByCSS = document.querySelectorAll("input[type=text]");`
   
## Перебор DOM коллекций
1. Цикл for of
   

      for (let elem of list.children) {
         console.log(elem);
      }
2. Создать массив из коллекции и перебрать с помощью метода forEach
      

      Array.from(document.getElementsByTagName("li")).forEach((elem)=>{
         console.log(elem);
      });

## Создание элементов
`let divElem = document.createElement("div");` - 
 создает html элемент, чтобы добавить его на страницу, нужно использовать дополнительные методы.

## Работа с атрибутами
1. Добавить атрибут: `divElem.setAttribute("id", "container");` -
   установили атрибут id со значением container элементу divElem;
2. Проверить наличие атрибута: `divElem.hasAttribute("id")`;  
3. Получить значение атрибута: `divElem.getAttribute("id")`;
4. Удалить атрибут: `divElem.removeAttribute("id");`.

## Атрибут style
1. Добавить стиль через атрибут style:
   

      divElem.style.background = "#FBE9E7";
      divElem.style.fontWeight = "bold"; 

2. Добавить несколько стилей через атрибут style:
   

      divElem.style.cssText = 
         "text-align: center;
          font-size: 1.7rem;";

3. Получить стили элемента: 
   

      let color = divElem.style.background; // #FBE9E7

4. Получить все стили элемента:
      

      let listStyles = getComputedStyle(divElem);


## Работа с css классами
1. Добавить один или несколько классов: `divElem.classList.add("orange-border");`;
2. Проверить наличие класса: `divElem.classList.contains("orange-border");`;
3. Удалить один или несколько классов: `divElem.classList.remove("orange-border");`;
4. Удалить класс, если его нет, добавить, если он есть: `divElem.classList.toggle("orange-border");`.

## Добавление, замена, удаление элементов в HTML
1. `element.append(...nodes / strings)` – добавляет узлы или строки в конец element;
2. `element.prepend(...nodes / strings)` – добавляет узлы или строки в начало element;
3. `element.before(...nodes / strings)` – добавляет узлы или строки до element;
4. `element.after(...nodes / strings)` – добавляет узлы или строки после element;
5. `element.replaceWith(...nodes / strings)` – заменяет element заданными узлами или строками. 
6. `element.remove()` - удаление элемента element


      let divElem = document.createElement("div");
      for (let article of articles) {
         let pElem = document.createElement("p"); // создали элемент p
         pElem.innerText = article.title; // добавили текст
         pElem.classList.add("article-title"); // добавили класс
         divElem.append(pElem); // элемент p добавили в элемент div
      }
      document.body.prepend(divElem); // элемент div, добавили первым в body

## Работа с таблицами
      let tableArea = document.getElementById("users-block");
      let table = document.createElement("table");

### Создание заголовка
      let caption = table.createCaption();
      caption.innerText = "Заголовок таблицы";

### Создание ряда
      let row = table.insertRow(0);

### Создание ячеек в ряду
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);

      cell1.innerText = "Содержимое ячейки 1";
      cell2.innerText = "Содержимое ячейки 2";

### Добавление таблицы в HTML 
      tableArea.append(table);