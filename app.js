function computeCredit(age, hasJob = false) {
    switch (true) {
        case age > 24 && hasJob:
            return 1000;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(productPrice, age, money, hasJob = false) {
    const creditMoney = computeCredit(age, hasJob);
    return productPrice <= money + creditMoney;    
}

console.log(canBuy(2000, 25, 1000));