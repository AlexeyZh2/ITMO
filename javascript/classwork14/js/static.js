// принципы ооп:
// 1. наследование. Все дублирующиеся свойства
// и методы необходимо выносит в родительский класс.
// Дочерний класс должен расширять родительский,
// а не полностью переопределять его функционал
// наследование прототипов, extends

// 2. инкапсуляция. Свойсва,  которым нельзя обращаться напрямую
// должны быть приватными. Методы, которые вызываются только
// внутри класса должны быть приватными
// _имяСвойства / #имяСвойства

// 3. полиморфизм. (полиморфизм наследования)

// 4. абстракция.

// SOLID

class Unit {
    _health = 100;
    set health(value) {
        this._health = value;
    }
    get health() {
        return this._health;
    }
    attack(enemy){
        enemy._health -= 1;
    }

    // static свойства и методы не принадлежат объектам,
    // они пренадлежат непосредственно классам,
    // их можно вызвать без создания объекта
    // (экземпляра класса)

    // static методы  - обычно вспомогательные,
    // обслуживающие методы или фабричные методы
    // (в которым происхоит создание объектов)
    // в static методах нельзя обращаться к не static свойствам
    // и вызывать не static методы, в static методах не используется this
    static getUnit(unitType) {
        if (unitType === "рыцарь") {
            return new Knight();
        }
        return new Infantry();
    }
}

class Infantry extends Unit {
    attack(enemy){
        enemy._health -= 10;
    }
}
class Knight extends Unit {
    attack(enemy){
        enemy._health -= 12;
    }
}

let unitType = prompt("Введите тип юнита: рыцарь или пехотинец");
let enemyType = prompt("Введите тип юнита-противника: рыцарь или пехотинец");

let unit = Unit.getUnit(unitType);
let enemyUnit = Unit.getUnit(enemyType);

unit.attack(enemyUnit);





let date = new Date();
date.getDate();

let date1 = new Date();
date1.getDate();

let arr = [];
arr.push("js");

let arr1 = [];
arr1.push("js");




