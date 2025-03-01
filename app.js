'use strict'

let successMessage = 'Успешно добавлено';
const user = {
  name: 'John',
  roles: []
}


function addRoles(user, role) {
  if (role === 'admin') {
    const message = 'Ошибка';
    console.log(message);
    return user;
  }

  user.roles.push(role);
  const successMessage = 'Ура!';
  console.log(successMessage);

  function logRoles() {
    console.log(user.roles);
  }
  logRoles();
  return user;
}

console.log(addRoles(user, 'dev'));
console.log(successMessage);