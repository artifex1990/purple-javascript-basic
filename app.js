const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
    balance += operation;
}

console.log(balance);

const finalBalance = operations.reduce((acc, operation) => acc + operation, 0);
console.log(finalBalance);


const minOperation = operations.reduce((acc, operation) => acc > operation ? operation : acc);
console.log(minOperation);
