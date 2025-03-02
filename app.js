'use strict';

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
    document.querySelector('.notification').classList.remove('notification_hidden');
}

const obj = JSON.parse('{"a": 1}');
console.log(obj.a);
const str = JSON.stringify(obj);
console.log(str);