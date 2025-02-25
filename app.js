function logName(name, surname) {
    console.log(`Моё имя ${name} ${surname}!`);
}

logName('Pavel', 'Demyanov');

function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}

console.log(countDepositSum(1000, 24, 0.12));
console.log(countDepositSum(1000, 48, 0.1));