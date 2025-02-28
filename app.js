const user = {
    name: 'Вася', 
    age: 30 , 
    surname: 'Пупкин', 
    skills: ['coding', 'pentest', 'dating'],
    getFullName: function () { return this.name + ' ' + this.surname },
};

console.log(user.getFullName());