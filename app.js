function isPhoneNumber(num) {
    let phone = num.trim();
    phone = phone.replace('+7', '8');

    if (!phone.startsWith('8')) {
        return false;
    }

    phone = phone.replaceAll('(', '');
    phone = phone.replaceAll(')', '');
    phone = phone.replaceAll(' ', '');
    phone = phone.replaceAll('-', '');

    if (phone.length !== 11) {
        return false;
    }

    return !isNaN(phone);
}


console.log(isPhoneNumber('8(999)999-99-99'));
console.log(isPhoneNumber('+7(999)999-99-99'));
console.log(isPhoneNumber('+7999999h999'));