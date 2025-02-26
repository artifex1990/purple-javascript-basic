const str = 'Вася Пупкин';
console.log(str.includes('а'));
console.log(str.startsWith('Вася'));
console.log(str.endsWith('Пупкин'));
console.log(new String('Вася Пупкин').includes('а'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('Пупкин', 'Вася'));
console.log(str.replaceAll('а', 'и'));
console.log(str.replace(/а/g, 'и'));

const str2 = ' Вася Пупкин  \n';
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());