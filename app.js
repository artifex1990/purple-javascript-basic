const arr = [[2, 4], [4, 10], [20, [40, 50]]];

const res = arr.flat(2);
console.log(res);

const res2 = arr.flatMap(el => el.concat([1]));
console.log(res2);