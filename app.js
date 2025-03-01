'use strict';

const user = {
  name: 'John',
  id: 1,
  roles: ['Admin']
};

const newUser = Object.assign({}, user);
newUser.name = 'NewUser';


const newUser2 = {
  ...user
};
newUser2.name = 'NewUser2';
newUser2.roles.push('NewRole');
console.log(user);
console.log(newUser);
console.log(newUser2);