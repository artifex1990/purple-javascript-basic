const deposit = 12_000;
const rate = 0.07;
const percentPerMonth = rate / 12;
const depositTermsPerMonth = 24;

const goal = 13_500;

const res = deposit * (1 + percentPerMonth) ** depositTermsPerMonth;

console.log(res)

if (res > goal) {
    console.log(`You have reached your goal! ${res - goal}`);
} else {
    console.log('You have not reached your goal!');
}