const role = 'fuck';


switch (role) {
    case 'manager': console.log('manager'); break;
    case 'admin': console.log('admin'); break;
    case 'ceo': console.log('ceo'); break;
    default: console.log('I can`t you');
}

switch (role) {
    case 'manager':
    case 'admin': console.log('Isn`t boss'); break;
    case 'ceo': console.log('ceo'); break;
    default: console.log('I can`t you');
}

const num = 0;

switch (true) {
    case num > 0: console.log('positive'); break;
    case num < 0: console.log('negative'); break;
    default: console.log('zero'); break;
}