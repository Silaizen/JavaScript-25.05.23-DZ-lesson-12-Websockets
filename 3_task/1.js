let number = parseInt(prompt("Введіть тризначне число:"));

if (!isNaN(number) && number >= 100 && number <= 999) {
  const firstDigit = Math.floor(number / 100);
  const secondDigit = Math.floor((number % 100) / 10);
  const thirdDigit = number % 10;
  
  if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
    alert(`У числі ${number} є однакові цифри.`);
  } else {
    alert(`У числі ${number} немає однакових цифр.`);
  }
} else {
  alert("Будь ласка, введіть коректне тризначне число.");
}
