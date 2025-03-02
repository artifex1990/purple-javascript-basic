'use strict';

// document.querySelector('.button').addEventListener('click', function () {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }

//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

function inputChanged(e) {
    if (e.code === 'Enter') {
        submitForm();
    }
}

function submitForm() {
    const input = document.querySelector('.input').value;

    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    //document.querySelector('.notification').classList.add('notification_active');
    //document.querySelector('.notification').classList.remove('notification_active');
    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('class', 'notification');
    document.querySelector('.notification').setAttribute('key', 1);
    document.querySelector('.notification').setAttribute('user-id', 1);
    console.log(document.querySelector('.notification').getAttribute('user-id'));
}

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('button');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;

document.querySelector('.test').appendChild(newElement);

localStorage.setItem('token', 'fadfasf');
localStorage.setItem('token1', 1);
localStorage.setItem('token2', true);

const token1 = localStorage.getItem('token1');
console.log(typeof token1);
localStorage.removeItem('token2');
localStorage.clear();