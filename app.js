const arr = [2, 4, 4, 10];

const avg = arr
    .reduce((acc, el, i) => i !== arr.length - 1 ? acc + el : (acc + el) / arr.length, 0);
console.log(avg);