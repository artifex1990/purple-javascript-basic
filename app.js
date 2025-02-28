const users = [
    { name: 'Вася', age: 30 , surname: 'Пупкина', skills: ['coding', 'pentest', 'dating'] },
    { name: 'Катя', age: 30 , surname: 'Васина', skills: ['hacking'] },
    { name: 'Аня', age: 30 , surname: 'Шлепина', skills: ['coding', 'pentest'] },
    { name: 'Петя', age: 30 , surname: 'Виноградов', skills: ['coding', 'pentest', 'dating'] },
];

const userData = users.map(user => { 
    return { 
        fullName: user.name + ' ' + user.surname,
        skillNum: user.skills.length 
    };
});
console.log(userData);