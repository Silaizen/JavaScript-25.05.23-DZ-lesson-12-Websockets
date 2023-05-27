const usdAmount = parseFloat(prompt('Введіть суму в доларах США:'));
const currency = prompt('Введіть валюту для конвертації (EUR, UAN або AZN):');

let convertedAmount;
let currencyName;

if (currency === 'EUR') {
  convertedAmount = usdAmount * 0.91;
  currencyName = 'євро';
} else if (currency === 'UAN') {
  convertedAmount = usdAmount * 36.96;
  currencyName = 'українська гривня';
} else if (currency === 'AZN') {
  convertedAmount = usdAmount * 1.70;
  currencyName = 'азербайджанський манат';
} else {
  alert('Введено неправильну валюту!');
}

if (convertedAmount !== undefined) {
  alert(`${usdAmount} USD = ${convertedAmount.toFixed(2)} ${currencyName}`);
}
