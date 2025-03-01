'use strict';

let firstName = 'Action';
let firstName2 = firstName;
firstName = 'Hero';
console.log(firstName);
console.log(firstName2);

const user1 = {
  name: 'John',
};

const user2 = user1;

user2.name = 'Tom';
console.log(user1);
console.log(user2);