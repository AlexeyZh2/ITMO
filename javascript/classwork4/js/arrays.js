'use strict';

// ссылочные типы (объекты)
// у объектов могут быть свойства и методы

// набор свойств и методов зависит от типа объекта

// массив - объект типа Array
// предназначены для работы с упорядоченным набором элементов

// объявление массива
let numbers = new Array(); // пустой массив
numbers = new Array(3); // первоначальная длина массива
console.log(numbers);

let ints = []; // пустой массив
ints = [5, 10, -7]; // массив в 3 элементами
console.log(ints);

// длина массива - последний индекс + 1
console.log(ints.length);

// разряженный массив
ints = [4, 6, , -10, 0, , , 66, , 7];
console.log(ints);
console.log(ints.length);

let colors = ["blue", "red", "yellow", "pink"];

// доступ к элементам массива осуществляется через []
console.log(colors[2]); // "yellow"
colors[0] = "black";
console.log(colors);

// обращение к несуществующему массива
console.log(colors[100]); // undefined
colors[100] = 90;
console.log(colors);


ints = [3, 6, 9];
// многомерный массив

ints = [[34, 67, 12], [-90, 55, 3], [1, 44, -100]];
console.log(ints[2].length); // длина последнего подмассива
console.log(ints[1][1]);
console.log(ints[2][3]); // undefined
console.log(ints[1][2]); // 3

numbers = [5, 7, -12, -90, 11, -45];

// вывести все положительные числа в консоль
// for of не позволяет изменять значения элементов массива
for (let element of numbers) { /* for in не для массивов */
    if (element > 0) console.log(element);
}

// увеличить каждый элемент массива в 2 раза
for (let i = 0; i < numbers.length; i++ /* или i += 1 или i = i + 1*/) {
    numbers[i] *= 2; // или numbers[i] = numbers[i] * 2;
}
console.log(numbers);

/*numbers[0] *= 2;
numbers[1] *= 2;
numbers[2] *= 2;
numbers[3] *= 2;
numbers[4] *= 2; и тд*/

colors = ["blue", "red", "yellow", "black", "pink", "brown"];
let letter = "B";

// создать новый массив и скопировать в него все элементы
// массива colors, которые начинаются c буквы letter (без учета регистра)

let bColors = [];
for (let color of colors) {
    if (color.toLowerCase().startsWith(letter.toLowerCase())) {
        // добавление одного или нескольких элементов в конец массива
        bColors.push(color);
    }
}
console.log(bColors);

ints = [[34, 67, 12], [-90, 55, 3], [1, 44, -100]];

// сумму элементов массива
let sum = 0;
for (let arr of ints) {
    for (let int of arr) {
        sum += int;
    }
}
console.log(sum);


ints = [[34, 67, 12], [-90, 55, 3], [1, 44, -100]];

sum = 0;
for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < ints[i].length; j++){
        sum += ints[i][j];
    }
}
console.log(sum);

colors = ["blue", "red", "yellow", "black", "pink", "brown"];
letter = "B";
// удалить из массива цвета, которые не начинаются на letter
// (без учета регистра)

for (let i = colors.length - 1; i >= 0; i--){
    if (!colors[i].toLowerCase().startsWith(letter.toLowerCase())) {
        // удаление 1 или нескольких элементов по индексу
        colors.splice(i, 1);
    }
}
// ["blue", "yellow", "black", "pink", "brown"]
// i = 1
for (let i = 0; i < colors.length; i++){
    if (!colors[i].toLowerCase().startsWith(letter.toLowerCase())) {
        // удаление 1 или нескольких элементов по индексу
        colors.splice(i, 1);
        i--;
    }
}
console.log(colors);

colors = ["blue", "red", "yellow", "black", "pink", "brown"];
// удаляет и возвращает последний элемент массива
let lastElem = colors.pop();

// удаляет и возвращает первый элемент массива
let firstElem = colors.shift();
// добавляет один или несколько элементов в начало массива
colors.unshift("purple", "orange");
// splice(индекс, количество, элементы_для_добавления);
colors.splice(1, 2, "greenyellow", "silver");
// ["purple", "greenyellow", "silver", "yellow", "black", "pink"]






