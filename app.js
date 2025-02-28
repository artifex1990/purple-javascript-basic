const userArray = ['Вася', 'Пупкин', 24];

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    skills: [
        'Программирование',
        'Готовка'
    ],
    eduBasic: 'School 3',
    eduPro: 'BGTU'
};

console.log(user);
console.log(user.skills);
console.log(user['skills']);
const level = 'Pro';
console.log(user['edu' + level]);

user['city'] = 'Moscow';
console.log(user.city);

user.age = 30;
user['age'] = 30;
console.log(user);