"use strict";
// объекты типа Cat создаются с характеристиками:
// имя, вес, количество побед (изначально 0)
// каждый кот должен иметь возможность напасть на другого кота,
// тот кот, чей вес окажется больше считается победителем,
// количество его побед увеличивается на 1
class Cat {

    _win = 0;

    constructor(nameValue, weightValue) {
        this.weight = weightValue;
        if (!nameValue || nameValue.length < 2) {
            throw new Error("имя слишком короткое");
        }
        this._name = nameValue;
    }

    set weight(value){
        if (!value || value < 1) {
            throw new Error("вес слишком мал");
        }
        this._weight = value;
    }
    get weight(){
        return this._weight;
    }
    get win(){
        return this._win;
    }

    attack(enemyCat){
        console.log(this, enemyCat);
        if (!(enemyCat instanceof Cat)) {
            console.log("Нападать можно только на котов");
            return;
        }
        if (this._weight > enemyCat._weight) {
            this._win++;
            console.log(`кот ${this._name} победил!`)
        } else if (this._weight < enemyCat._weight){
            enemyCat._win++;
            console.log(`кот ${enemyCat._name} победил!`)
        } else {
            console.log("Ничья");
        }
    }
}

let cat1 = new Cat("Васька",3);
let cat2 = new Cat("Том",5);
let cat3 = new Cat("Мурка",2);

cat1.attack(cat2);
cat2.attack(cat3);
