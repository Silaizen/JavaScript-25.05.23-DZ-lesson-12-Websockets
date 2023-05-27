const number = parseInt(prompt("Введіть п'ятирозрядне число:"));
let isPalindrome;

if (number < 10000 || number > 99999) {
  isPalindrome = false;
} else {
  const digit1 = Math.floor(number / 10000);
  const digit2 = Math.floor(number / 1000) % 10;
  const digit4 = Math.floor(number / 10) % 10;
  const digit5 = number % 10;
  
  isPalindrome = (digit1 === digit5 && digit2 === digit4);
}

const message = isPalindrome ? 'є паліндромом' : 'не є паліндромом';

switch (message) {
  case 'є паліндромом':
    alert(`Число ${number} ${message}.`);
    break;
  case 'не є паліндромом':
    alert(`Число ${number} ${message}.`);
    break;
  default:
    alert(`Неправильне введення числа.`);
    break;
}
