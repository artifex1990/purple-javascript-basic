function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(6, 2));

const toRefactorPower = (num, power) => num ** power;
console.log(toRefactorPower(5, 3));