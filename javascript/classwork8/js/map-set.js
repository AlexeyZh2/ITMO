"use strict";

let apple = {
    name: "Яблоко",
    "calorific value": 47,
    carbohydrates: 10,
};
let mushroom = {
    name: "Белый гриб",
    "calorific value": 34,
    carbohydrates: 1.1,
};
let water = {
    name: "Вода",
    "calorific value": 0,
    carbohydrates: 0,
};

// ключ(любой тип данных) - значение(любой тип данных)

let food = new Map(); // ()

// добавление данных
food.set(apple, 20) // ({apple}, 20)
    .set(mushroom, 30) // ({mushroom}, 30)
    .set(water, 2); // ({water}, 2)

/*
food.set(apple, 20);
food.set(mushroom, 30);
food.set(water, 2);
*/

if (food.has(apple)) {
    console.log("Информация о яблоках известна");
}
// удаление по ключу
food.delete(water);

if (food.has(water)) {
    console.log("Информация о воде известна");
}
// получить значение по ключу
console.log(food.get(apple));

// размер Map
console.log(food.size);



for (let key of food.keys()) {
    console.log(key.name);
    console.log(key.carbohydrates);
}
// перебор значений
let portionsCount = 0;
for (let value of food.values()) {
    portionsCount += value;
}
console.log(portionsCount);

for (let pair of food.entries()) { // food
    console.log(pair[0].name, pair[1]);
}

water = {
    name: "Вода",
    "calorific value": 0,
    carbohydrates: 0,
};

// Map из объекта
// [
//      [name, Вода],
//      [calorific value, 0],
//      [carbohydrates, 0]
// ]

let waterMap = new Map(Object.entries(water));
console.log(waterMap.get('carbohydrates')); // 0

// объект из Map
let foodObject = Object.fromEntries(food);
console.log(foodObject);


// SET - множество уникальных значений
let uniqueFood = new Set();
uniqueFood
    .add(apple)
    .add(apple)
    .add(water)
    .add(mushroom);

console.log(uniqueFood.size); // 3

// перебор set for...of
for (let elem of uniqueFood) {
    console.log(elem.name);
    console.log(elem);
}

// массив из ключей / значений мапы, сета
let arr = Array.from(food.keys());
console.log(arr);

arr = Array.from(food.values());
console.log(arr);

arr = Array.from(uniqueFood);
console.log(arr);

arr = [56, 89, 22, 22, 67, 11, 90, 90];
let numsSet = new Set(arr);
arr = Array.from(numsSet);
console.log(arr);

