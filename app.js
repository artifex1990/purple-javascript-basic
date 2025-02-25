const bmwX3Price = 10_0000;
const fordFocusPrice = 10_000;
const budget = 20_000;

let message = budget > bmwX3Price 
? 'BMW' 
: 'Велосипед';

console.log(`Я хочу купить ${message}`);