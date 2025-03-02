'use strict';

const audi = {
    make: 'Audi',
    model: 'A3',
    damages: []
};

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({ part, rate });
        console.log(`Добавить повреждение на ${this.make} ${this.model}.`);
    }
}

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Кузов', 3);
console.log(audi);


const addDamageAudRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageAudRoof(2);
console.log(audi);
