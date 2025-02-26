const userName = 'Вася aka Terminator Пупкин';
const [name, , , lastName] = userName.split(' ');
const fullUserName = 
    userName.slice(0, userName.indexOf(' ')) 
    + 
    userName.slice(userName.lastIndexOf(' '), userName.length);

console.log(fullUserName);