"use strict";
// наследование
class Person {
    _name; _age;
    _surname = "не указана";
    constructor(nameValue, ageValue) {
        this._name = nameValue;
        this._age = ageValue;
    }
    set surname(value) {
        this._surname = value;
    }
    printInfo(){
        // let surnameInfo = this._surname || "не указана";
        console.log(`Имя: ${this._name}, фамилия: ${this._surname}, возраст: ${this._age}`);
    }
    run(){
        console.log(`${this._name} бежит`);
    }
}

// класс Developer наследуется от класса Person
// приэтом в наследство он получает все методы, свойства Person и конструктор
// класс Developer - дочерний класс
// класс Person - родительский класс
// множественное наследование запрещено
class Developer extends Person {
    // добавление собственных свойств
    _skills = [];

    // переопределение конструктора родителя
    constructor(nameValue, ageValue, skillsArr) {
        // обязаны вызвать конструктор родителя
        super(nameValue, ageValue); // вызов конструктора родителя
        this._skills = skillsArr;
    }

    // переопределение методов родителя: название метода и количество
    // аргументов должны совпадать с родительским
    printInfo(){
        // можно полностью переопределить функционал
        // или вызвать метод родителя и добавить функционал
        super.printInfo(); // вызов метода родителя
        console.log(this._skills);
    }

    // добавление собственных методов
    addSkill(skillValue){
        // добавить skillValue в массив _skills, если его не существует
        if (!this._skills.includes(skillValue)) {
            this._skills.push(skillValue);
        }
    }
}

let person1 = new Person("Глеб", 33);
person1.surname = "Петров";
person1.printInfo();
person1.run();

let developer1 = new Developer("Павел", 27, ["git", "js"]);
developer1.printInfo();
developer1.run();
developer1.addSkill("html");
developer1.addSkill("css");

console.log(person1, developer1);


// все классы неявно наследуются от класса Object,
// получаеют в наследство его методы, которые могут быть переопределены
// (например, метод toString)
// Object не наследуется от других классов

// цепочка прототипов
// developer__person__object__null

// поиск свойств, сеттеров, геттеров и остальных методов осуществляется вверх по цепочке прототипов
// console.log(developer.name); // "Павел"
// console.log(developer.id); // undefined


class Dog {
    color = "не указан";
    bark(){
        console.log(`Пёс цвета ${this.color} громко лает`);
    }
}
// bark(){ console.log(`Пёс цвета ${this.color} громко лает`); }
let dog1 = new Dog(); // {color: "Белый"}
dog1.color = "Белый";
dog1.bark();

let dog2 = new Dog(); // {color: "не указан"}
dog2.bark();


