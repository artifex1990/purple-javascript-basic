'use strict';

const user = {
  login: 'example@mail.com',
  password: '12345'
};

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  }
}

console.log(user);

const removePasswordUser = removePassword.bind(user, true);
removePasswordUser();
console.log(user);