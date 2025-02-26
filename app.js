function power(pow) {
    return function (num) {
        return num ** pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(power(10)(2));