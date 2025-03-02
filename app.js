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

    const objectForJSON = {
        text: input
    }

    localStorage.setItem('text', JSON.stringify(objectForJSON));
    console.log(JSON.parse(localStorage.getItem('text')));
}

