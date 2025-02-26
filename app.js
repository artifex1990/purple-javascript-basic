function sum(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function power(a, b) { return a ** b; }
function calculate(a, b, fn) { 
    console.log(fn.name);
    const res = fn(a, b);
    return res;
 }

 console.log(calculate(1, 2, sum));
 console.log(calculate(1, 2, subtract));
 console.log(calculate(123, 2, power));
