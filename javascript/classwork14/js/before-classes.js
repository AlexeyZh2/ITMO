"use strict";
// функция - конструктор используется для создания объектов
function Person(nameValue, ageValue){
    this._name = nameValue;
    this._age = ageValue;
    this._surname = "не указана";

    // метод, объявленные в функции-конструктор, дублируется
    // у каждого объекта
}

Person.prototype.surname = function (value){
    this._surname = value;
}

Person.prototype.printInfo = function (){
    console.log(`Имя: ${this._name}, фамилия: ${this._surname}, возраст: ${this._age}`);
}

// наследование
function Developer(nameValue, ageValue, skillsArr) {
    Person.call(this, nameValue, ageValue);  // вызов конструктора родителя
    this._skills = skillsArr; // можно добавить собственные свойства
}
// можно добавить собственные методы
Developer.prototype.addSkill = function (skillValue){
    if (!this._skills.includes(skillValue)) {
        this._skills.push(skillValue);
    }
}

// переопределить метод родителя
Developer.prototype.printInfo = function () {
    // можно вызвать метод родителя
    Person.prototype.printInfo.call(this);
    // можно добавить свой функционал
    console.log(this._skills);
}

// наследование прототипов (extends)
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

// функцию-конструктор можно вызвать без new,
// (можно: new Person(), можно, но объект не будет создан: Person())

// класс нельзя (можно: new Cat(), нельзя: Cat())
let person1 = new Person("Глеб", 33);
person1.surname("Петров"); // сеттер и геттер, как обычный метод!!!
person1.printInfo();




