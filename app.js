'use strict';

function sum(num1, num2) {
    console.log(this);
    console.log(arguments);
    return num1 + num2;
}

console.log(sum(5, 10));

const sumArrow = (num1, num2) => {
    console.log(this);
    console.log(arguments);
    return num1 + num2;
}

console.log(sumArrow(5, 10));