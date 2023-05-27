const year = parseInt(prompt("Введіть рік:"));
const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
const message = isLeapYear ? "Вказаний рік є високосним." : "Вказаний рік не є високосним.";
alert(message);
