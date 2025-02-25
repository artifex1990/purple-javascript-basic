const arr = ['!', 'JS', 'люблю', 'Я'];
const res = [];


for (let i = arr.length - 1; 0 <= i; i--) {
    res.push(arr[i]);
}

console.log(res.join(' '));