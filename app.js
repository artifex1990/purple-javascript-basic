const wallet = {
    balance: 0,
    operations: [],
    increase: function (sum, reason) {
        this.balance += sum;
        this.operations.push({reason: reason, sum: sum});

        return true;
    },
    decrease: function (sum, reason) {
        if (sum > this.balance) {
            console.log('Недостаточный баланс!');
            return false;
        }

        this.balance -= sum;
        this.operations.push({reason: reason, sum: -sum});

        return true;
    },
    getCountOperations: function () { return this.operations.length },
}

console.log(wallet.increase(100, 'deposit'));
console.log(wallet.increase(100, 'salary'));
console.log(wallet.decrease(13, 'tax'));
console.log(wallet);
console.log(wallet.operations);
console.log(wallet.balance);