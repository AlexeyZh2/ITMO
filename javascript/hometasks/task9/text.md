### Задание 1
Написать функцию `generateTable`, которая принимает на вход массив объектов и создает таблицу.
Функция не должна быть привязана к конкретным названиям свойств. Заголовки ячеек - названия свойств в верхнем регистре.
Пример того, что должно получиться на изображении [tables.png](tables.png)


        Массивы для проверки:
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

        let goods = [
            {
                title: "Piano",
                price: 3000,
                count: 25
            },
            {
                title: "Guitar",
                price: 1200,
                count: 40
            },
            {
                title: "Drum",
                price: 2700,
                count: 12
            },
            {
                title: "Flute",
                price: 900,
                count: 50
            },
            {
                title: "Harp",
                price: 3400,
                count: 5
            }
        ];

        Примеры вызова функции:
        generateTable(articles); - генерация таблицы со статьями
        generateTable(goods); - генерация таблицы с товарами

### Задание 2
Написать функцию `generateField(n)` по генерации поля размером n x n. Значение n не может быть меньше 3.
Для 3х ячеек поля (для выбора ячейки использовать random) добавить атрибут prise. Значение атрибута prise - значение из объекта prises.
Пример того, что должно получиться при `n` равным 4 и генерации поля 4 Х 4: [field.png](field.png).


         let prises = {
            headphones: "Наушники",
            book: "Книга",
            postcard: "Открытка"
         };
