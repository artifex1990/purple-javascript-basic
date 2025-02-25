const operations = [1_000, -700, 300, -500, 10_000];
const startingBalance = 100;

function getBalance(operations, initialBalance) {
    let balance = initialBalance;
    for (const el of operations) {
        balance += el;
    }

    return balance;
}

function checkOperations(operations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;
    for (const el of operations) {
        balance += el;

        if (balance < 0) {
            isOk = false;
            break;
        }
    }

    return isOk;
}

function avarageOperations(operations, startingBalance) {
    const fixedNum = 2;
    let positiveSum = 0;
    let negativeSum = 0;
    let positiveCount = 0;
    let negativeCount = 0;

    for (let el of operations) {
        if( el > 0) {
            positiveSum += el;
            positiveCount++;
        } 
        if (el < 0) {
            negativeSum += el;
            negativeCount++;
        }
    }

    positiveSum /= positiveCount;
    negativeSum /= negativeCount;

    return [+positiveSum.toFixed(fixedNum), +negativeSum.toFixed(fixedNum)];
}


console.log(getBalance(operations, startingBalance));
console.log(checkOperations(operations, startingBalance));
console.log(avarageOperations(operations));
