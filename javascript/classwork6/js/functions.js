'use strict';
// анонимные функции
let oldSqrt = function (x) {
    return x * x;
};

let oldDouble = function (x) {
    return x * 2;
};

// анонимные стрелочные функции
// стрелочные функции не имеют this и arguments

// если функция принимает 1 аргумент, круглые скобки можно не ставить
// если в теле функции одна инструкция, фигурные скобки можно не ставить,
// return по умолчания
let sqrt = x => /* return */ x * x;
let double = x => {
    return x * 2;
};
let printTitle = (element, text) => {
    if (text.length < 3) return;
    element.innerText = text.toUpperCase();
};
printTitle(document.body, `sqrt 3 = ${sqrt(3)}, double 4 = ${double(4)}`);


// Методы массивов
/* 1. Метод filter(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает true или false
- метод возвращает новый массив (исходный массив не меняется)
- новый массив состоит из элементов исходного,
  которые прошли проверку переданной функцией
*/

// TODO 1: создать новый массив, который состоит только из svg изображений.
//  В решении использовать метод filter

let images = ["flowers.png", "cat.svg", "elephant.jpg", "tree.svg"];
let checkFn = function (param) {
    return param.endsWith(".svg");
};
checkFn = param => param.endsWith(".svg");
let svgImages = images.filter(checkFn);
svgImages = images.filter(param => param.endsWith(".svg"));
console.log(svgImages);

// TODO 2: создать новый массив без элементов,
//  которые могут быть приведены к false. В решении использовать метод filter

let elements = [,"flowers.png", NaN, "cat.svg", null ,"elephant.jpg", 0, "",
    "tree.svg", false];
checkFn = function (elem) {
    if (elem === NaN || elem === 0 || elem === "" || elem === undefined || elem === false) return false;
    return true;
};
checkFn = function (elem) {
    return !elem === false;
};
checkFn = elem => elem;
let clearArr = elements.filter(checkFn);
console.log(clearArr);


/* 2. Метод map(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает значение. Возвращаемое значение может быть любым
- метод возвращает новый массив (исходный массив не меняется)
- новый массив состоит из элементов исходного,
  которые были преобразованы переданной функцией
*/

// TODO 3: создать новый массив, в котором логины будут в верхнем регистре.
//  В решении использовать метод map

let logins = ["rewr", "nbwuergw", "cdwt", "bfey"];
let upLogins = logins.map(elem => elem.toUpperCase());
console.log(upLogins);


// TODO 4: создать новый массив, в котором цены будут с учетом скидки в 10%,
//  к новой цене необходимо добавить символы ' р.'. В решении использовать метод map

let prices = [900, 3500, 10400, 750, 3600, 2100];
let newPrices = prices.map(price => price * 0.9 + ' p.');
console.log(newPrices);


/* 3. Метод every(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает true или false.
- метод возвращает true, если ВСЕ элементы исходного массива
  прошли проверку переданной функцией и false, если нет
*/

// TODO 5: в html можно вывести только изображения с расширением svg.
//  Необходимо проверить, все ли изображения из массива pics подходят для вывода.
//  В решении использовать метод every. Информацию о массиве вывести в консоль

let pics = ["flowers.svg", "cat.svg", "elephant.svg", "tree.svg"];
let res;

// TODO 6: проверить, все ли значения в массиве попадают в диапазон от 18 до 35
//  В решении использовать метод every. Информацию о массиве вывести в консоль

let usersAges = [20, 33, 18, 37, 44, 21, 28, 34, 30];
res = usersAges.every(age => age > 18 && age < 35);
console.log(res);

/* 4. Метод some(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает true или false.
- метод возвращает true, если ХОТЯ БЫ ОДИН элемент исходного массива
  прошел проверку переданной функцией
*/

// TODO 7: группа может отправиться в поход, только есть в ней есть хотя бы
//  один человек старше 40 лет и нет ни одного человека младше 18.
//  В решении использовать методы some и every.
//  Информацию о том, можно ли группе пойти в поход вывести в консоль

let ages = [23, 21, 34, 18, 90, 44, 50];

if (ages.every(age => age >= 18) && ages.some(age => age > 40)) {
    console.log("Группа может отправляться в поход")
} else {
    console.log("Группа не может отправляться в поход")
}


/* 5. Метод foreach(func)
- принимает на вход функцию, которая принимает на вход три аргумента:
  элемент массива, индекс элемента, сам массив и ничего не возвращает
- метод используется для перебора массива
- имеет доступ к индексам
- позволяет изменять элементы текущего массива (новый массив не создается),
  переданной функцией
*/

// TODO 9: дан массив названий компаний-партнеров. Необходимо преобразовать
//  названия таким образом, чтобы первые и последние буквы были
//  в верхнем регистре, остальные в нижнем

let names = ["ApPlE", "MicROsoft", "Sony", "SumSuNG"];
let capitalizeFn = function (element, index, arr) {
      console.log(`Элемент: ${element}, индекс: ${index}. Из массива ${arr}`);

      let first = element[0].toUpperCase(); // первая буква
      let last = element[element.length - 1].toUpperCase(); // последняя буква
      let middle =  element.substring(1, element.length - 1).toLowerCase(); // середина

      arr[index] = first + middle + last;
};
names.forEach(capitalizeFn);
console.log(names);

/* 6. Метод sort(func)
- принимает на вход функцию, которая принимает на вход 2 аргумента и
  возвращает либо отрицательное число, либо положительное число, либо 0
function compare(a, b){
    if (a меньше b по некоторому критерию ) return -1;
    if (a больше b по некоторому критерию ) return 1;
    return 0; // a должно быть равным b
}
- метод используется для сортировки массива (меняется исходный массив)
*/
// TODO 10: дан массив температур, необходимо отсортировать его по убыванию
let temps = [307, 412, -11, -1402, 130, 225]; // 412 .... -1402
function sortTemps(a, b){
    if (a === b) return 0;
    if (a > b) return -1;
    return 1;
}
temps.sort(sortTemps);
console.log(temps);



