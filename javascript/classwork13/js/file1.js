"use strict";

// Array Object Date Function String NodeList ...

class Point {
    // перечисляем свойства и методы объектов
    x = 0; // 0 - значение по умолчанию
    y = 0; // 0 - значение по умолчанию
}

class Figure {
    points = [];

    // методы
    addPoint(point){
        // проверка на тип данных объекта:
        // вернет true, если объект принадлежит типу Point;
        // false, если нет
        if (!(point instanceof Point)) {
            console.warn("point д.б. типа Point");
            return;
        }
        for (let p of this.points) {
            if (p.x === point.x && p.y === point.y) {
                console.warn("массив не может содержать одинаковых точек");
                return;
            }
        }
        this.points.push(point);
    }

    draw(canvas){
        canvas.height = 700;
        canvas.width = 700;
        let context = canvas.getContext("2d");
        context.beginPath();
        //context.moveTo(this.points[0].x, this.points[0].y);
        for (let p of this.points) {
            context.lineTo(p.x, p.y);
        }
        context.closePath();
        context.stroke();
    }
}


let point1 = new Point(); // вызов функции-конструктора
let point2 = new Point();
console.log(point1, point2);

point1.x = 12;
point1.y = 40;

// задать x, y для point2
point2.x = 38;
point2.y = 96;

// создать point3, задать point3 значения x и y
let point3 = new Point();
point3.x = 140;
point3.y = 170;

let figure = new Figure();
figure.addPoint(point1);
figure.addPoint(point2);
figure.addPoint(point3);

figure.draw(document.querySelector("canvas"));

console.log(figure);














