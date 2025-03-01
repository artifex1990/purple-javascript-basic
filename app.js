'use strict';

console.log(this);

function addNum(num1, num2) {
    console.log(this);
    return num1 + num2;
}

const addNum2 = (num1, num2) => {
    console.log(this);
    return num1 + num2;
}

const user = {
    name: 'John',
    surname: 'Doe',
    getFulName: function () {
        console.log(this);
        return `${this.name} ${this.surname}`;
    }
}

addNum();
addNum2();

user.getFulName();

const user2 = {
    name: 'Jane',
    surname: 'Doe',
}

user2.getFulName = user.getFulName;
user2.getFulName();

const getFullName = user2.getFullName;
getFullName();