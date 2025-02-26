const arr = [2, 4, 4, 10, 20];

function some (arr, search) {
    const res = arr.find(el => el === search);

    return !!res;
}

console.log(some(arr, 4));
console.log(arr.some(el => el === 4));