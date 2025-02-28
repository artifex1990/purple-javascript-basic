let user = {
    name: 'John',
    age: 30,
    city: 'Moscow'
}

const { age, ...userWithout } = user;
console.log(age);
console.log(userWithout);

const additionalData = {
    skills: ['coding', 'pentest', 'dating'],
    creditCard: '4111111111111111'
};

user = {
    ...user,
    ...additionalData
};
console.log(user);