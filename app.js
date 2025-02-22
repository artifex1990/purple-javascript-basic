const ratePerHourUSD = 80;
const orderHour = 40;
const maxWorkHours = 5;
const maxWorkDaysInWeekdays = 5;
const DeadlineOnDay = 11 - 2;

const ratePerDay = ratePerHourUSD * maxWorkHours;
const workDayOnOrder = orderHour / maxWorkHours;
const costOrder = workDayOnOrder * ratePerDay;

console.log(`Цена работы: ${costOrder} $.`);
console.log(`Успеем ли закончить проект: ${workDayOnOrder < DeadlineOnDay ? 'да' : 'нет'}`);